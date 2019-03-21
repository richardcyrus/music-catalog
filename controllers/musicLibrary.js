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
    // Set a default record limit of 10, if the pageSize isn't provided.
    const limit = parseInt(req.query.pageSize) || 10;
    let offset = 0;

    debug('limit', limit);
    debug('offset', offset);

    db.SheetMusic.findAndCountAll()
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

        return db.SheetMusic.scope('library')
          .findAll({
            attributes,
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

  // filtered by column value
  findFiltered: function(req, res) {
    const limit = parseInt(req.query.pageSize) || 10;
    let offset = 0;
    debug('limit', limit);
    debug('offset', offset);

    let { filterCondition } = req.query;
    filterCondition = JSON.parse(filterCondition);
    const { tableColumn, tableValue } = filterCondition;
    switch (tableColumn) {
      case 'title':
        db.SheetMusic.findAndCountAll()
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

            return db.SheetMusic.scope('library')
              .findAll({
                attributes,
                limit: limit,
                offset: offset,
                where: {
                  [tableColumn]: tableValue,
                },
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
        break;
      case 'composers':
        db.SheetMusic.findAndCountAll()
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

            return db.SheetMusic.scope('library')
              .findAll({
                attributes,
                limit: limit,
                offset: offset,
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
              .then((results) => {
                res.status(200).json({
                  rows: results,
                  pages: pages,
                  count: data.count,
                });
              });
          })
          .catch((error) => res.status(422).json(error));
        break;
      case 'arrangers':
        db.SheetMusic.findAndCountAll()
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

            return db.SheetMusic.scope('library')
              .findAll({
                attributes,
                limit: limit,
                offset: offset,
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
              .then((results) => {
                res.status(200).json({
                  rows: results,
                  pages: pages,
                  count: data.count,
                });
              });
          })
          .catch((error) => res.status(422).json(error));
        break;
      case 'Voicing':
        break;
      case 'style':
        db.SheetMusic.findAndCountAll()
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

            return db.SheetMusic.scope('library')
              .findAll({
                attributes,
                limit: limit,
                offset: offset,
                where: {
                  [tableColumn]: tableValue,
                },
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
        break;
      case 'occasions':
        db.SheetMusic.findAndCountAll()
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

            return db.SheetMusic.scope('library')
              .findAll({
                attributes,
                limit: limit,
                offset: offset,
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
              .then((results) => {
                res.status(200).json({
                  rows: results,
                  pages: pages,
                  count: data.count,
                });
              });
          })
          .catch((error) => res.status(422).json(error));
        break;
      case 'quantityOnHand':
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
      case 'purchasePrice':
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
