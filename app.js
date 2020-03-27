var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 以下是websokect依赖
const ws = require('ws');
const uuid = require('uuid');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.disable('etag');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 添加静态文件地址
app.use(express.static(path.join(__dirname, 'public')));

// 自定义静态文件地址
app.use('/static',express.static(path.join(__dirname, 'public'),{
  // maxAge: 600000,
}))


// 路由分发
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// websokect

let socketServer = ws.Server;

let wss = new socketServer({port: 443})

let clients = []

let clientIndex = 0;

function broadcastSend(type,msg,nickname){
  clients.forEach(function(client,index){
      if(client.ws.readyState === ws.OPEN) {
          client.ws.send(JSON.stringify({
              'type': type,
              'nickname': nickname,
              'message': msg,
              'visitedNum': clientIndex
          }))
      }
  })
}

wss.on('connection',function(ws){
  let client_uuid = uuid.v4();
  let nickname = `陌生人${clientIndex++}`;
  clients.push({
      "id": client_uuid,
      "ws": ws,
      "nickname": nickname
  })

  broadcastSend("join", '加入聊天室', nickname);



  console.log(`client ${client_uuid} connected`);

  function closeSocket(){
      for(let i = 0;i<clients.length;i++) {
          if(clients[i].id == client_uuid) {
              let disconnect_message = `${nickname} 退出群聊`;
              broadcastSend("notification", disconnect_message, nickname);
              clients.splice(i, 1);
          }
      }
  }

  ws.on('message', function(message) {
      if(message.indexOf('/nick') === 0) {
          let nickname_array = message.split(' ');
          if(nickname_array.length >= 2) {
              let old_nickname = nickname;
              nickname = nickname_array[1];
              let nickname_message = `游客 ${old_nickname}  改名为 ${nickname}`;
              console.log(message)
              broadcastSend("nick_update", nickname_message, nickname);
          }
      } else {
          broadcastSend("message", message, nickname);
      }
  })

  ws.on('close', function() {
      closeSocket();
  })
})

// websokect结束


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(8088)

module.exports = app;
