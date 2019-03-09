/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

const router = require('express').Router();
var db = require('../../models');

// Music catalog route
router.get('/music', function(req, res) {
  db.SheetMusic.findAll({
    attributes: [
      'id',
      'title',
      'description',
      'voices',
      'duration',
      'style',
      'difficulty',
    ],
  }).then(function(allMusic) {
    res.json(allMusic);
  });
});

router.get('/filteredMusic', function(req, res) {
  const attribute = req.body.db.SheetMusic.findAll({
    attributes: [
      'id',
      'title',
      'description',
      'voices',
      'duration',
      'style',
      'difficulty',
    ],
    where: {
      // attributes:
    },
  }).then(function(filteredMusic) {
    res.json(filteredMusic);
  });
});

module.exports = router;
