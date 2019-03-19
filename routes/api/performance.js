/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const express = require('express');
const router = express.Router();
const performanceController = require('../../controllers/performances');
const checkToken = require('../middleware');

router.get('/', checkToken, performanceController.findAll);
router.get('/:id', checkToken, performanceController.find);

module.exports = router;
