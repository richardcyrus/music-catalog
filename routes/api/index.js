/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

const express = require('express');
const router = express.Router();
const libraryRoutes = require('./library');
const userRoutes = require('./user');

router.use('/library', libraryRoutes);
router.use('/user', userRoutes);

module.exports = router;
