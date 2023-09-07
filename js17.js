const http = require("http");
const url = require("url");
const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-type' : 'text/html; charset=UTF-8'});
    var queryData = url.parse(request.url, true).query; // 쿼리스트링만 추출
    var tmp1 = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>메인페이지</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="/?id=LEE">LEE</a></li>
                <li><a href="/?id=PARK">PARK</a></li>
                <li><a href="/?id=KIM">KIM</a></li>
            </ul>
        </nav>
        <div class="container">
            <h2>${queryData.id}</h2>
        </div>
    </body>
    </html>`; 
        response.end(tmp1);
});

let port = 3000;
let host = '127.0.0.1';
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});