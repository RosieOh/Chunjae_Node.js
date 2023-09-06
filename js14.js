const fs = require("fs");
let content = "나도 알아, 나도 피곤해";
fs.writeFile('./oth2.txt', content, (err) => {
    fs.readFile('./oth2.txt', 'utf8', (err, data) => {
        console.log(data);
    });
});

fs.writeFileSync('./oth3.txt', content);
var data = fs.readFileSync('./oth3.txt', 'utf8');
console.log(data);

// 내용 추가
fs.readFile('./oth2.txt', 'utf8', (err, data) => {
    let con = data+" 내용추가";
    fs.writeFile('./oth2.txt', con, (err) => {
        console.log(con);
    });
});