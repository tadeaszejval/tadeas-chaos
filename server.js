const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  const content = fs.readFileSync(filePath, 'utf8');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(content);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
