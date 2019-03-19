/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../../controllers/user');
const checkToken = require('../middleware');

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  userController.loginUser
);
// router.post('/register', userController.registerUser);
router.get('/', checkToken, userController.findAll);
router.get('/:id', checkToken, userController.find);

module.exports = router;
