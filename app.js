const express = require('express');
const path = require('path');
const app = express();

//设置模板引擎的默认路径
app.set('views', path.join(__dirname, "views"));
// 设置模板引擎的默认后缀 注意此处为view后没有s
app.set('view engine', 'art');
//引入模板引擎
app.engine('art', require('express-art-template'));

require('./model/users.js');

app.use(express.static(path.join(__dirname, 'public')));



app.use('/home', require('./route/home.js'));
app.use('/admin', require('./route/admin.js'));

app.listen(3000);
console.log('succeed');