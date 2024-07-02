import express, { json } from "express";
import morgan from "morgan";
import { router } from "./routes/pacientes.route.js";
import { errorMiddleware } from "./middleware/error.js";

export const app = express();

app.use(morgan("dev")); // middleware para visualizar las peticiones que hace el cliente al servidor en consola
app.use(json()); // middleware para que el servidor pueda entender los datos que envía el cliente en formato JSON
app.disable("x-powered-by"); // deshabilita la cabecera X-Powered-By para mayor seguridad

app.use("/api/v1", router);

/**
 * Middleware para manejar errores
 */
app.use(errorMiddleware);