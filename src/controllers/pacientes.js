import { PacienteModel } from "../models/mysql/pacientes.js";

export class PacienteController {
  static async getAll(req, res) {
    const pacientes = await PacienteModel.getAll();
    res.json(pacientes);
  }
  static async getById(req, res, next) {
    try {
      const paciente = await PacienteModel.getById(req.params.id);
      res.json(paciente);
    } catch (err) {
      next(err); // next() se encarga de enviar el error al middleware de error
    }
  }
  static async create(req, res) {
    const respuestaCrearPaciente = await PacienteModel.create(req.body);
    res.json(respuestaCrearPaciente);
  }
  static async update(req, res) {
    const { id } = req.params;
    const respuestaActualizarPaciente = await PacienteModel.update(
      id,
      req.body
    );
    res.json(respuestaActualizarPaciente);
  }
  static async delete(req, res, next) {
    const { id } = req.params;
    try {
      const respuesta = await PacienteModel.deleteById(id);
      res.json({
        estado: respuesta,
        mensaje: `Se eliminaron los datos del paciente con el id ${id} de forma exitosa.`,
      });
    } catch (err) {
      next(err); // next() se encarga de enviar el error al middleware de error
    }
  }
}
