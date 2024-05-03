import { config } from "dotenv";
import server from "./src/app/app";
import db from "./src/app/db";
import mongoDB from "./src/database/config";
import { services } from "./src/database/services";
const { conn } = db;

const main = async () => {
  // await mongoDB();
  // await services();
  // User
};
main();
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
