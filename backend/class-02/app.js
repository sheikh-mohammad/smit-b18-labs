// import console from "console";
// import fs from "fs";

// const createUsers = (() => {
//   fs.writeFile("./users.txt", "Sheikh Mohammad", (err) => {
//     if (err) {
//       console.log(`Error in creating users: ${err}`);
//     } else {
//       console.log("-------------");
//       console.log(`File Created`);
//       console.log("-------------");
//     }
//   });
// })();

// const getUsers = (() => {
//   fs.readFile("./users.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.log(`Error in getting users: ${err}`);
//     } else {
//       console.log("-------------");
//       console.log(`File Readed`);
//       console.log(`File Content: ${data}`);
//       console.log("-------------");
//     }
//   });
// })();

// const updateUsers = (() => {
//   fs.appendFile("./users.txt", "\nMustafa Shahzad", (err) => {
//     if (err) {
//       console.log(`Error in Updating Users: ${err}`);
//     } else {
//       console.log("-------------");
//       console.log(`File Updated`);
//       console.log("-------------");
//     }
//   });
// })();

// const deleteUsers = (() => {
//   fs.unlink("./users.txt", (err) => {
//     if (err) {
//       console.log(`Error in Deleting Users: ${err}`);
//     } else {
//       console.log("-------------");
//       console.log(`File Deleted`);
//       console.log("-------------");
//     }
//   });
// })();

// import http from "http";

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   res.end("Hello World");
// });

// server.listen(PORT, () => {
//   console.log(`starting sever on port ${PORT}`);
// });
