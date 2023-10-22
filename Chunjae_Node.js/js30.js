const dbCon = require("./model/sample.js");
const express = require("express");
const path = require("path"); // path 모듈 추가
const bodyParser = require("body-parser"); // body-parser 모듈 추가
const app = express();

let title = "";
let tmp1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>샘플</title>
</head>
<body>
    <ul>
        <li><a href="/list">목록</a></li>
        <li><a href="/addSample">샘플 추가</a></li>
    </ul>
    <hr>
`;

let tmp2 = `</body>
</html>`;

// Body Parser 설정
app.use(bodyParser.urlencoded({ extended: true }));

// 루트 경로
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "sampleMain.html")); // 절대 경로로 변경
});

// 샘플 목록 페이지
app.get('/list', (req, res) => {
    title = `<h2>샘플 항목</h2>`;
    let li = `<ul>`;
    dbCon.getSampleList()
        .then((rows) => {
            rows.forEach((row) => {
                li = li + `<li><a href="/get/${row.NO}">${row.NAME}</a></li>`;
            });
            li = li + `</ul>`;
            res.send(tmp1+title+li+tmp2);
        })
        .catch((errMsg) => {
            res.send(tmp1+title+errMsg+tmp2);
        });
});

// 샘플 상세보기 페이지
app.get('/get/:no', (req, res) => {
    title = `<h2>샘플 상세보기</h2>`;
    let body = "";
    dbCon.getSample(req.params.no)
        .then((row) => {
            body = `<p>no : ${row.NO}, name : ${row.NAME}</p>`
            res.send(tmp1+title+body+tmp2);
        })
        .catch((errMsg) => {
            res.send(errMsg);
        });
});

// 샘플 추가 페이지
app.get('/addSample', (req, res) => {
    res.sendFile(path.join(__dirname, "sampleForm.html")); // 절대 경로로 변경
});

// 샘플 추가 POST 요청 처리
app.post('/addSamplePro', (req, res) => {
    const { no, name } = req.body;
    const sample = { no, name };

    dbCon.addSample(sample)
        .then((msg) => {
            console.log(msg);
            res.redirect('/'); // 등록 성공 시 메인 페이지로 리다이렉트
        })
        .catch((errMsg) => {
            console.log(errMsg);
            res.send("등록 실패"); // 등록 실패 시 오류 메시지 반환
        });
});

let port = 4000;
app.listen(port, () => {
    console.log(`Server Starting on ${port}`);
});
