import server from "./src/app/app";

import db from "./src/app/db";

const { conn } = db;

// const server = express();

// const server2 = require("./src/app/app.ts");
// const { conn } = require("./src/app/db.js");

if (true) {
  //not include database
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
} else {
  conn.sync({ force: false }).then(() => {
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  });
}
