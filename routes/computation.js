var express = require('express');
var router = express.Router();
//var a;

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send(`Random Function  is : ${Math.fround(Math.random(a))}`);
  res.send(`Random Function  is : ${Math.floor(Math.random())}`);
});

module.exports = router;
