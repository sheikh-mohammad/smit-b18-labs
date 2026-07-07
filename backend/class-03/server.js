console.log("Server.js is running...");

import http from "http";

const PORT = 3000;

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    console.log("Home...");
  } else if (request.url === "/about") {
    console.log("About...");
  } else if (request.url === "/contact") {
    console.log("Contact...");
  } else if (request.url === "/create-user") {
    console.log("User Created...");
  }
});

server.listen(PORT, () =>
  console.log(`Server is being listend at poret ${PORT}`),
);
