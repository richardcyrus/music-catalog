/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const express = require('express');
const router = express.Router();
const libraryController = require('../../controllers/musicLibrary');
const checkToken = require('../middleware');

router.get('/', checkToken, libraryController.findAll);

module.exports = router;
