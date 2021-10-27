var express = require('express');
var router = express.Router();
var a;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`Random Function applied to ${Math.random(a)} is ${Math.fround(a)}`);
});

module.exports = router;
