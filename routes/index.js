var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'chaos' });
});

router.get('/get', function(req, res, next) {
  console.log('这是请求get',req)
  var data = {
    data: '这是get请求',
    code: 200
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  
  res.end(JSON.stringify(data));
});


router.post('/post',function(req, res, next){
  console.log('这是请求post',req.query)
  var data = {
    data: '这是post请求',
    code: 200
  }
  res.writeHead(200, {'Content-Type': 'application/json'});

  res.end(JSON.stringify(data));
})

module.exports = router;