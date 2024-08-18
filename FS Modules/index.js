import http from "http";

//create our server
const server = http.createServer((req, res) => {
  res.write("<h1>Hello from Node JS</h1>");
});

server.listen(8000, () => console.log("Server Up"));
