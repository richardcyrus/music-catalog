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

router
  .route('/')
  .get(checkToken, userController.list)
  .post(checkToken, userController.create);

router
  .route('/:id')
  .all(checkToken)
  .get(userController.findOne)
  .put(userController.update)
  .delete(userController.destroy);

module.exports = router;
