import http from "http";

const PORT = 3000;

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Server is running...");
  } else if (request.url === "/about") {
    response.end("About...");
  } else if (request.url === "/contact") {
    response.end("Contact...");
  } else {
    response.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
