/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const express = require('express');
const router = express.Router();
const performanceController = require('../../controllers/performances');

router
  .route('/')
  .get(performanceController.list)
  .post(performanceController.create);

router
  .route('/:id')
  .get(performanceController.findOne)
  .put(performanceController.update)
  .delete(performanceController.destroy);

module.exports = router;
