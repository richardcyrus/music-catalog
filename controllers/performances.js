/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const db = require('../models');
// eslint-disable-next-line no-unused-vars
const debug = require('debug')('your-score:performanceController');

const defaultAttributes = ['id', 'name', 'description', 'startDate'];

module.exports = {
  list: function(req, res) {
    const limit = parseInt(req.query.pageSize) || 10;
    let offset = 0;

    db.Performance.findAndCountAll()
      .then((data) => {
        const page = parseInt(req.query.page) || 0;
        const pages = Math.ceil(data.count / limit);
        offset = page > 0 ? limit * page : offset;

        return db.Performance.scope('songs')
          .findAll({
            attributes: defaultAttributes,
            limit: limit,
            offset: offset,
          })
          .then((results) => {
            res.status(200).json({
              rows: results,
              pages: pages,
              count: data.count,
            });
          });
      })
      .catch((error) => res.status(422).json(error));
  },
  findOne: function(req, res) {
    db.Performance.scope('songs')
      .findOne({
        where: { id: req.params.id },
        attributes: defaultAttributes,
      })
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(422).json(error));
  },
  create: function(req, res) {
    res
      .status(422)
      .json({ message: 'performancesController::create() not implemented' });
  },
  update: function(req, res) {
    res
      .status(422)
      .json({ message: 'performancesController::update() not implemented' });
  },
  destroy: function(req, res) {
    res
      .status(422)
      .json({ message: 'performancesController::destroy() not implemented' });
  },
};
