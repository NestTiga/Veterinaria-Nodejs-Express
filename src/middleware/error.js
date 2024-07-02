import { FindError } from "../error/error.js";

export const errorMiddleware = function (err, req, res, next) {
  // Si el error es de tipo FindError, se envía un mensaje de error personalizado
  if (err instanceof FindError) {
    return res.status(err.statusCode).json({
      estado: err.estado,
      error: err.message,
    });
  } else {
    return res.status(400).json({
      // NOTA!!!!!: corregir al status después de las validaciones de datos  <---------------------ALERTA
      estado: false,
      error: err.message,
    });
  }
};
