const http = require("http");

// Create Server Callback
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
