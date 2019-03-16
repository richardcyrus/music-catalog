/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const db = require('../models');
const debug = require('debug')('your-score:libraryController');

// Grid Attributes to bring back
const attributes = [
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
];

module.exports = {
  findAll: function(req, res) {
    db.SheetMusic.scope('library')
      .findAll({
        attributes,
      })
      .then((records) => res.json(records))
      .catch((error) => res.status(422).json(error));
  },
  // filtered by column value
  findFiltered: function(req, res) {
    let { q: params } = req.query;
    params = JSON.parse(params);
    const { tableColumn, tableValue } = params;
    switch (tableColumn) {
      case 'Title':
        tableColumn.toLowerCase();
        db.SheetMusic.scope('library')
          .findAll({
            attributes,
            where: {
              [tableColumn]: tableValue,
            },
          })
          .then((records) => res.json(records))
          .catch((error) => res.status(422).json(error));
        break;
      case 'Composer':
        db.SheetMusic.scope('library')
          .findAll({
            attributes,
            include: [
              {
                model: db.Composer,
                as: 'composers',
                attributes: ['name'],
                through: {
                  attributes: [],
                },
                where: {
                  name: tableValue,
                },
              },
            ],
          })
          .then((records) => res.json(records))
          .catch((error) => res.status(422).json(error));
        break;
      case 'Arranger':
        db.SheetMusic.scope('library')
          .findAll({
            attributes,
            include: [
              {
                model: db.Arranger,
                as: 'arrangers',
                attributes: ['name'],
                through: {
                  attributes: [],
                },
                where: {
                  name: tableValue,
                },
              },
            ],
          })
          .then((records) => res.json(records))
          .catch((error) => res.status(422).json(error));
        break;
      case 'Voicing':
        break;
      case 'Style':
        tableColumn.toLowerCase();
        db.SheetMusic.scope('library')
          .findAll({
            attributes,
            where: {
              [tableColumn]: tableValue,
            },
          })
          .then((records) => res.json(records))
          .catch((error) => res.status(422).json(error));
        break;
      case 'Occasion':
        console.log('use Occasion model');
        db.SheetMusic.scope('library')
          .findAll({
            attributes,
            include: [
              {
                model: db.Occasion,
                as: 'occasions',
                attributes: ['name'],
                through: {
                  attributes: [],
                },
                where: {
                  name: tableValue,
                },
              },
            ],
          })
          .then((records) => res.json(records))
          .catch((error) => res.status(422).json(error));
        break;
      case 'Copies':
        tableColumn.toLowerCase();
        db.SheetMusic.scope('library')
          .findAll({
            attributes,
            where: {
              [tableColumn]: tableValue,
            },
          })
          .then((records) => res.json(records))
          .catch((error) => res.status(422).json(error));
        break;
      case 'Cost':
        tableColumn.toLowerCase();
        db.SheetMusic.scope('library')
          .findAll({
            attributes,
            where: {
              [tableColumn]: tableValue,
            },
          })
          .then((records) => res.json(records))
          .catch((error) => res.status(422).json(error));
        break;
      default:
        break;
    }
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
