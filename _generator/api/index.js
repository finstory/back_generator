const server = require("./src/app/app.js");

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
