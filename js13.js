const fs = require("fs");
// 동기 방식 : 한꺼번에 파일 전체 내용을 불러올 경우
var syncData = fs.readFileSync('./oth.txt', 'utf8');
console.log(`동기 방식 : ${syncData}`);
// 비동기 방식 : 불러온 데이터 중에서 일부만 컨트롤 하는 경우
fs.readFile('./oth.txt', 'utf8', function(err, result){
    console.log(`비동기 방식 : ${result}`);
});