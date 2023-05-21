var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({data:"sos un crack papa!!", mjs:"success", statusCode:200});
});

module.exports = router;
