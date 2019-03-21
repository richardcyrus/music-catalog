/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members');

router
  .route('/')
  .get(memberController.list)
  .post(memberController.create);

router
  .route('/:id')
  .get(memberController.findOne)
  .put(memberController.update)
  .delete(memberController.destroy);

module.exports = router;
