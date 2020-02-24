var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'chaos' });
});

router.get('/test', function(req, res, next) {
  var data = {
    data: 'hello world',
    code: 200
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(data));
});

module.exports = router;
