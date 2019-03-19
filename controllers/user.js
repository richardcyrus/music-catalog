/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const db = require('../models');
const debug = require('debug')('your-score:userController');
const jwt = require('jsonwebtoken');

const userAttributes = [
  'userId',
  'userLogin',
  'userEmail',
  'userRegistered',
  'userActive',
  'userApproved',
  'userApprovedDate',
];

module.exports = {
  loginUser: (req, res) => {
    // debug(req.user.userLogin);
    const token = jwt.sign(
      { username: req.user.userLogin },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    res.status(200).json({
      auth: true,
      token: token,
    });
  },
  findAll: (req, res) => {
    // Set a default record limit of 10, if the pageSize isn't provided.
    const limit = parseInt(req.query.pageSize) || 10;
    let offset = 0;

    debug('params:limit', limit);
    debug('params:offset', offset);

    db.User.findAndCountAll()
      .then((data) => {
        // react-table starts at page 0, so set here if not provided.
        const page = parseInt(req.query.page) || 0;

        // Calculate the total number of pages based on the limit.
        const pages = Math.ceil(data.count / limit);

        // Set the offset for the query based on the page number.
        offset = page > 0 ? limit * page : offset;

        debug('findAndCountAll:page', page);
        debug('findAndCountAll:pages', pages);
        debug('findAndCountAll:offset', offset);

        return db.User.scope('withRoles')
          .findAll({
            attributes: userAttributes,
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
  find: (req, res) => {
    return db.User.scope('withRoles')
      .findOne({
        where: { userId: req.params.id },
        attributes: userAttributes,
      })
      .then((results) => {
        res.status(200).json({
          results,
        });
      })
      .catch((error) => res.status(422).json(error));
  },
};
