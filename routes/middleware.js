/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  if (token && token.startsWith('Bearer ')) {
    token = token.replace('Bearer ', '');
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Please Login to use this application.',
        });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Please Login to use this application.',
    });
  }
};

module.exports = checkToken;
