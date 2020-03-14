var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  connection.query('select * from data',function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

module.exports = router;
