/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

const express = require('express');
const router = express.Router();
const checkToken = require('../middleware');

const libraryRoutes = require('./library');
const userRoutes = require('./user');
const performanceRoutes = require('./performance');
const memberRoutes = require('./members');
const roleRoutes = require('./roles');

router.use('/library', checkToken, libraryRoutes);
router.use('/users', userRoutes);
router.use('/performances', checkToken, performanceRoutes);
router.use('/members', checkToken, memberRoutes);
router.use('/roles', checkToken, roleRoutes);

module.exports = router;
