/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const db = require('../models');
const debug = require('debug')('your-score:libraryController');

module.exports = {
  findAll: function(req, res) {
    db.SheetMusic.scope('library')
      .findAll({
        attributes: [
          'id',
          'title',
          'description',
          'voices',
          'duration',
          'difficulty',
          'style',
          'publisher',
          'quantityOnHand',
          'purchasePrice',
        ],
      })
      .then((records) => res.json(records))
      .catch((error) => res.status(422).json(error));
  },
  // filtered by column value
  findFiltered: function(req, res) {
    let { q: params } = req.query;
    params = JSON.parse(params);
    const { tableColumn, tableValue } = params;
    db.SheetMusic.scope('library')
      .findAll({
        attributes: [
          'id',
          'title',
          'description',
          'voices',
          'duration',
          'difficulty',
          'style',
          'publisher',
          'quantityOnHand',
          'purchasePrice',
        ],
        where: {
          [tableColumn]: tableValue,
        },
      })
      .then((records) => res.json(records))
      .catch((error) => res.status(422).json(error));
  },
  findById: function(req, res) {
    res.json({
      message: 'libraryController::findById() not implemented',
    });
  },
  create: function(req, res) {
    res.json({
      message: 'libraryController::create() not implemented',
    });
  },
  update: function(req, res) {
    res.json({
      message: 'libraryController::update() not implemented',
    });
  },
  remove: function(req, res) {
    res.json({
      message: 'libraryController::remove() not implemented',
    });
  },
};
