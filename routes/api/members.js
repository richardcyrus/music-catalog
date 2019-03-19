/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members');
const checkToken = require('../middleware');

router.get('/', checkToken, memberController.findAll);

module.exports = router;
