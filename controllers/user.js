/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
// const db = require('../models');
const debug = require('debug')('your-score:userController');
const jwt = require('jsonwebtoken');

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
};
