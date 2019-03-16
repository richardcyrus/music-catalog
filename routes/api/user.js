/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../../controllers/user');

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  userController.loginUser
);
// router.get('/find', userController.findUser);
// router.post('/register', userController.registerUser);

module.exports = router;
