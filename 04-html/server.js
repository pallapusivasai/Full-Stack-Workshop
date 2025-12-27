// server.js
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Successfully Logged\n');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});