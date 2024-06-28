import { app } from "./app.js";
import { sequelize } from "./database/db.js";
import "./database/models/paciente.js";

async function main() {
  const PORT = process.env.PORT ?? 3000;
  try {
    await sequelize.sync({ force: false }); // force: false => Actualiza la base de datos si hay cambios en los modelos
  } catch (error) {
    console.error("Error inesperado al sincronizar la base de datos");
  }

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}

main();
