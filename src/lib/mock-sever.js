/* eslint-disable @typescript-eslint/no-var-requires */
const io = require("socket.io")(3001, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Usuário conectado:", socket.id);

  socket.on("message", (data) => {
    console.log("Mensagem recebida:", data);

    io.emit("message", data);
  });
});
