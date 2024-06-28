import { Paciente } from "../../database/models/paciente.js";

export class PacienteModel {
    static async getAll(){
        return await Paciente.findAll();
    }
    static async getById(id){
        const pacienteEncontrado= await Paciente.findOne({
            where:{
                id_paciente:id
            }
        });

        return pacienteEncontrado;
    }
    static async create(paciente){
        const pacienteCreado= await Paciente.create(paciente);
        return pacienteCreado;
    }
}