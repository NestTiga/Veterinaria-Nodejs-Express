import z from "zod";
import { validationError } from "../error/validationError.js";

export function validate(userValidation) {
  return (req, res, next) => {
    try {
      userValidation(req.body);
      next();
    } catch (error) {
      next(new validationError(error));
    }
  };
}

export function userValidation(data) {
  const pacienteSchema = z.object({
    nombre: z.string({
      invalid_type_error: "El nombre debe ser un string",
      required_error: "El nombre es requerido",
    }),
    especie: z.string({
      invalid_type_error: "La especie debe ser un string",
      required_error: "La especie es requerida",
    }),
    estado: z.boolean({
      invalid_type_error: "El estado debe ser un boolean",
      required_error: "El estado es requerido",
    }),
    fecha_nacimiento: z
      .string({
        required_error: "La fecha de nacimiento es requerida",
      })
      .regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: "La fecha de nacimiento debe tener el formato YYYY-MM-DD",
      })
      .refine(
        (value) => {
          const date = new Date(value);
          return !isNaN(date.getTime());
        },
        {
          message: "La fecha de nacimiento debe ser una fecha válida",
        }
      ),
  });

  pacienteSchema.parse(data);
}
