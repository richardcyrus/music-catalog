/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
  });
}

// API Routes
router.use('/api/v1.0/', apiRoutes);

module.exports = router;
