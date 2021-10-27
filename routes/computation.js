var express = require('express');
var router = express.Router();
var a;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`Random Function: ${Math.random(a).round}`);
});

module.exports = router;
