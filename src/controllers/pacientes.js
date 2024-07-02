import { PacienteModel } from "../models/mysql/pacientes.js";

export class PacienteController {
  static async getAll(req, res, next) {
    try {
      const pacientes = await PacienteModel.getAll();
      res.status(200).json(pacientes);
    } catch (err) {
      next(err); // next() se encarga de enviar el error al middleware de error
    }
  }
  static async getById(req, res, next) {
    try {
      const paciente = await PacienteModel.getById(req.params.id);
      res.status(200).json(paciente);
    } catch (err) {
      next(err);
    }
  }
  static async create(req, res, next) {
    try {
      const respuestaCrearPaciente = await PacienteModel.create(req.body);
      res.status(201).json(respuestaCrearPaciente);
    } catch (err) {
      next(err);
    }
  }
  static async update(req, res, next) {
    const { id } = req.params;
    try {
      const respuestaActualizarPaciente = await PacienteModel.update(
        id,
        req.body
      );
      res.status(201).json(respuestaActualizarPaciente);
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    const { id } = req.params;
    try {
      const respuesta = await PacienteModel.deleteById(id);
      res.status(200).json({
        estado: respuesta,
        mensaje: `Se eliminaron los datos del paciente con el id ${id} de forma exitosa.`,
      });
    } catch (err) {
      next(err); // next() se encarga de enviar el error al middleware de error
    }
  }
}
