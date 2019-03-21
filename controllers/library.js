/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const db = require('../models');
// eslint-disable-next-line no-unused-vars
const debug = require('debug')('your-score:libraryController');
const Op = db.Sequelize.Op;

const defaultAttributes = [
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
  list: function(req, res) {
    // Set a default record limit of 10, if the pageSize isn't provided.
    const limit = parseInt(req.query.pageSize) || 10;
    let offset = 0;

    // Start building the database query conditions.
    const filter = {
      attributes: defaultAttributes,
    };

    // If we have the column and value parameters, add them to the
    // query conditions.
    const { column, value } = req.query;
    switch (column) {
      case 'title':
        filter.where = {
          title: {
            [Op.like]: `%${value}%`,
          },
        };
        break;
      case 'voices':
        filter.where = {
          voices: {
            [Op.like]: `%${value}%`,
          },
        };
        break;
      case 'style':
        filter.where = {
          style: {
            [Op.like]: `%${value}%`,
          },
        };
        break;
      case 'composers':
        filter.include = [
          {
            model: db.Composer,
            as: 'composers',
            attributes: ['name'],
            through: {
              attributes: [],
            },
            where: {
              name: {
                [Op.like]: `%${value}%`,
              },
            },
          },
        ];
        break;
      case 'arrangers':
        filter.include = [
          {
            model: db.Arranger,
            as: 'arrangers',
            attributes: ['name'],
            through: {
              attributes: [],
            },
            where: {
              name: {
                [Op.like]: `%${value}%`,
              },
            },
          },
        ];
        break;
      case 'occasions':
        filter.include = [
          {
            model: db.Occasion,
            as: 'occasions',
            attributes: ['name'],
            through: {
              attributes: [],
            },
            where: {
              name: {
                [Op.like]: `%${value}%`,
              },
            },
          },
        ];
        break;
    }

    // Collect the number of pages based on the react-table setup.
    db.SheetMusic.findAndCountAll()
      .then((data) => {
        // react-table starts at page 0, so set here if not provided.
        const page = parseInt(req.query.page) || 0;

        // Calculate the total number of pages based on the limit.
        const pages = Math.ceil(data.count / limit);

        // Set the offset for the query based on the page number.
        offset = page > 0 ? limit * page : offset;

        // Execute the final query with all relevant conditions.
        return db.SheetMusic.scope('library')
          .findAll({
            ...filter,
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
    db.SheetMusic.scope('library')
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
      .json({ message: 'libraryController::create() not implemented' });
  },
  update: function(req, res) {
    res
      .status(422)
      .json({ message: 'libraryController::update() not implemented' });
  },
  destroy: function(req, res) {
    res
      .status(422)
      .json({ message: 'libraryController::destroy() not implemented' });
  },
};
