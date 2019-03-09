/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const express = require('express');
const router = express.Router();
const libraryController = require('../../controllers/musicLibrary');

router.route('/').get(libraryController.findAll);

module.exports = router;
