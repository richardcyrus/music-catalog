/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const db = require('../models');
// eslint-disable-next-line no-unused-vars
const debug = require('debug')('your-score:userController');
const jwt = require('jsonwebtoken');

const defaultAttributes = [
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
    const { user } = req;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Permission denied!',
      });
    }

    const u = {
      name: user.userEmail,
      userLogin: user.userLogin,
      email: user.userEmail,
      active: user.userActive,
      id: user.userId,
    };

    const token = jwt.sign(u, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24,
    });

    res.status(200).json({
      user: u,
      token: token,
    });
  },
  list: (req, res) => {
    const limit = parseInt(req.query.pageSize) || 10;
    let offset = 0;

    db.User.findAndCountAll()
      .then((data) => {
        const page = parseInt(req.query.page) || 0;
        const pages = Math.ceil(data.count / limit);
        offset = page > 0 ? limit * page : offset;

        return db.User.scope('withRoles')
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
  findOne: (req, res) => {
    db.User.scope('withRoles')
      .findOne({
        where: { userId: req.params.id },
        attributes: defaultAttributes,
      })
      .then((results) => res.status(200).json(results))
      .catch((error) => res.status(422).json(error));
  },
  create: (req, res) => {
    const { userLogin, userPass, userEmail, userActive } = req.body;

    db.User.findOrCreate({
      where: { userEmail: userEmail.toLowerCase() },
      defaults: {
        userLogin: userLogin,
        userPass: userPass,
        userRegistered: new Date(),
        userActive: userActive,
      },
    })
      .spread((user, created) => {
        if (user && !created) {
          return res.status(422).json({
            validationErrors: {
              userEmail: 'A user with that email already exists',
            },
          });
        }

        if (user && created) {
          return res.status(201).json(user.get({ plain: true }));
        }
      })
      .catch((error) => res.status(422).json({ error }));
  },
  update: function(req, res) {
    res
      .status(422)
      .json({ message: 'userController::update() not implemented' });
  },
  destroy: function(req, res) {
    res
      .status(422)
      .json({ message: 'userController::destroy() not implemented' });
  },
};
