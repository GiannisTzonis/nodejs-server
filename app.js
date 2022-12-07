const http = require("http");

// Create Server Callback
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit()
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Server</title ></head >");
  res.write("<body><h1>Finally</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
