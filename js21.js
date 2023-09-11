const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello Express')
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("오늘도 종로3가 가서 공부해야지?")
});