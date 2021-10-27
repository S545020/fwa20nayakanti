var express = require('express');
var router = express.Router();
var a;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`Random Function applied to ${a} is  ${Math.fround(Math.random(a))}`);
});

module.exports = router;
