import { PacienteModel } from "../models/mysql/pacientes.js";

export class PacienteController {
    static async getAll(req, res) {
        const pacientes= await PacienteModel.getAll();
        res.json(pacientes);
    }
    static async getById(req, res) {
        const paciente= await PacienteModel.getById(req.params.id);
        res.json(paciente);
    }
    static async create(req, res) {
        const respuestaCrearPaciente= await PacienteModel.create(req.body);
        res.json(respuestaCrearPaciente);
    }
    static async update(req, res){
        const {id}= req.params;
        const respuestaActualizarPaciente= await PacienteModel.update(id, req.body);
        res.json(respuestaActualizarPaciente);
    }
    static async delete(req, res){
        const {id}= req.params;
        const respuesta= await PacienteModel.deleteById(id);
        res.json({eliminado:respuesta});
    }
}
