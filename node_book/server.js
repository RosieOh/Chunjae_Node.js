// MySQL + Node.js 접속 코드
var mysql = require("mysql");
var conn = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "1234",
    database: "myboard",
});

conn.connect();

const express = require('express');
const app = express();

app.listen(8000, function() {
    console.log("포트 8000으로 서버 대기중 ...")
});

app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})


