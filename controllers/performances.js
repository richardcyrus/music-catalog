/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const db = require('../models');
const debug = require('debug')('your-score:performanceController');

module.exports = {
  findAll: function(req, res) {
    // Set a default record limit of 10, if the pageSize isn't provided.
    const limit = parseInt(req.query.pageSize) || 10;
    let offset = 0;

    debug('limit', limit);
    debug('offset', offset);

    db.Performance.findAndCountAll()
      .then((data) => {
        // react-table starts at page 0, so set here if not provided.
        const page = parseInt(req.query.page) || 0;

        // Calculate the total number of pages based on the limit.
        const pages = Math.ceil(data.count / limit);

        // Set the offset for the query based on the page number.
        offset = page > 0 ? limit * page : offset;

        debug('F&C:page', page);
        debug('F&C:pages', pages);
        debug('F&C:offset', offset);

        return db.Performance.findAll({
          attributes: ['id', 'name', 'description', 'startDate'],
          limit: limit,
          offset: offset,
        }).then((results) => {
          res.status(200).json({
            rows: results,
            pages: pages,
            count: data.count,
          });
        });
      })
      .catch((error) => res.status(422).json(error));
  },
};
