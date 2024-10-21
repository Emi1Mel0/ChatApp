const ws = require("ws");

const server = new ws.Server({ port: "3000" });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    const b = Buffer.from(message);
    console.log(b.toString());
    socket.send(`${message}`);
  });
});

// we receive message in buffer and if we want to read it
// we need to change inside index.js
// inside the server function , we add before log
