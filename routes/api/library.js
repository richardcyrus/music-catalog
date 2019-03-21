/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const express = require('express');
const router = express.Router();
const libraryController = require('../../controllers/library');

router
  .route('/')
  .get(libraryController.list)
  .post(libraryController.create);

router
  .route('/:id')
  .get(libraryController.findOne)
  .put(libraryController.update)
  .delete(libraryController.destroy);

module.exports = router;
