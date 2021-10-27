var express = require('express');
var router = express.Router();
//var a;
var randomValue = Math.random()*8;
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send(`Random Function  is : ${Math.fround(Math.random(a))}`);
  res.write(`Round  Function of ${randomValue} is ${Math.round()} \n`);
  res.write(`Round  Function of ${randomValue} is ${Math.fround()}\n`);
  res.write(`Round  Function of ${randomValue} is ${Math.random()}\n`);

  res.send();
});

module.exports = router;
