// npm install express => express 설치
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 4000;

var temp1 = `<!DOCTYPE>
<html>
    <head>
        <title></title>
    </head>
    <body>
        <nav id="gnb">
            <a href="/">메인</a>
            <a href="/sub">서브</a>
            <a href="/detail">상세</a>
`

var temp2 = `</body>
</html>`

var home = `<h2>메인페이지</h2>`;
var sub = `<h2>서브페이지</h2> `;
var detail = `<h2>상세페이지</h2> `;

app.get('/', (req, res) => {
    res.send(temp1+home+temp2);
});

app.get('/sub', (req, res) => {
    res.send(temp1+sub+temp2);
});

app.get('/detail', (req, res) => {
    res.send(temp1+detail+temp2);
});


server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("오늘도 종로3가 가서 공부해야지?")
});