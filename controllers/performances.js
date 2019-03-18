/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const db = require('../models');
const debug = require('debug')('your-score:performanceController');

module.exports = {
  findAll: function(req, res) {
    const limit = parseInt(req.query.pageSize) || 10;
    let offset = 0;
    debug('limit', limit);
    debug('offset', offset);

    db.Performance.findAndCountAll()
      .then((data) => {
        const page = parseInt(req.query.page) || 1;
        const pages = Math.ceil(data.count / limit);
        offset = limit * (page - 1);

        debug('F&C:page', page);
        debug('F&C:pages', pages);
        debug('F&C:offset', offset);

        return db.Performance.findAll({
          attributes: ['id', 'name', 'description', 'startDate'],
          limit: limit,
          offset: offset,
        }).then((results) => {
          res.status(200).json({
            data: results,
            pages: pages,
            count: data.count,
          });
        });
      })
      .catch((error) => res.status(422).json(error));
  },
};
