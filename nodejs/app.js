
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(`Running Node.js: ${process.versions.node}`);
});

const port = process.env.PORT || 8080;
server.listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);