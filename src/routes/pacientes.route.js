import { Router } from "express";
import { PacienteController } from "../controllers/pacientes.js";
import { validate, userValidation } from "../middleware/validations.js";

export const router = Router();

router.get('/pacientes', PacienteController.getAll);

router.get('/paciente/:id', PacienteController.getById);

router.post('/paciente', validate(userValidation), PacienteController.create);

router.put('/paciente/:id', PacienteController.update);

router.delete('/paciente/:id', PacienteController.delete);