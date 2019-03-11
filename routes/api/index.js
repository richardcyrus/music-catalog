/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

const router = require('express').Router();
var db = require('../../models');

// Retrieve all sheet_music records
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

// Retrieve filtered sheet_music records
router.get('/filteredMusic', function(req, res) {
  const { query: params } = req;
  const { tableColumn, tableValue } = params;
  console.log(tableColumn);
  console.log(tableValue);
  // console.log(params);
  // console.log(Object.getOwnPropertyNames(params));
  // console.log(params.q);
  // const paramsQObj = JSON.parse(params.q);
  // console.log(Object.getOwnPropertyNames(paramsQObj));
  // console.log(paramsQObj.tableColumn);
  // console.log(paramsQObj.tableValue);
  // db.SheetMusic.findAll({
  //   attributes: [
  //     'id',
  //     'title',
  //     'description',
  //     'voices',
  //     'duration',
  //     'style',
  //     'difficulty',
  //   ],
  //   where: {
  //     [tableColumn]: tableValue,
  //   },
  // }).then(function(filteredMusic) {
  //   res.json(filteredMusic);
  // });
  // res.json();
});

module.exports = router;
