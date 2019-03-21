/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const express = require('express');
const router = express.Router();
const rolesController = require('../../controllers/roles');

router
  .route('/')
  .get(rolesController.list)
  .post(rolesController.create);

router
  .route('/:id')
  .get(rolesController.findOne)
  .put(rolesController.update)
  .delete(rolesController.destroy);

module.exports = router;
