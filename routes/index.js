/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api/v1.0/', apiRoutes);

module.exports = router;
