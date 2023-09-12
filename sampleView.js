const dbCon = require("../model/sample.js");
const express = require("express");
const app = express();
let tmp1 = ``;
let tmp2 = ``;
app.get('/', (req, res) => {
    res.send("<h2>메인</h2>");
});
app.get('/list', (req, res) => {
    dbCon.getSampleList()
        .then((rows) => {
            res.send(rows);
        })
        .catch((errMsg) => {
            console.log(errMsg);
        });
    let port = 4000;
    app.listen(port, () => {
        console.log(`Server Starting on ${port}`);
    });