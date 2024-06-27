import { Router } from "express";
import { PacienteController } from "../controllers/pacientes.js";

export const router = Router();

router.get('/pacientes', PacienteController.getAll);

router.get('/paciente/:id', PacienteController.getById);

router.post('/paciente', PacienteController.create);

router.put('/paciente/:id', PacienteController.update);

router.delete('/paciente/:id', PacienteController.delete);