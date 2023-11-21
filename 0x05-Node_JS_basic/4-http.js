const http = require('http');

const app = http.createServer((req, res) => {
  const text = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.statusCode = 200;
  res.end(text);
}).listen(1245);

module.exports = app;
