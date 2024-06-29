import { Paciente } from "../../database/models/paciente.js";
import { FindError } from "../../error/error.js";

export class PacienteModel {
  static async getAll() {
    return await Paciente.findAll();
  }
  static async getById(id) {
    const pacienteEncontrado = await Paciente.findOne({
      where: {
        id_paciente: id,
      },
    });

    if (!pacienteEncontrado) {
      throw new FindError(`No se encontró al cliente con el id ${id}`, 404);
    }

    return pacienteEncontrado;
  }
  static async create(paciente) {
    const pacienteCreado = await Paciente.create(paciente);
    return pacienteCreado;
  }

  static async update(id, paciente) {
    const pacienteEncontrado = await Paciente.findByPk(id);
    pacienteEncontrado.nombre = paciente.nombre;
    pacienteEncontrado.especie = paciente.especie;
    pacienteEncontrado.estado = paciente.estado;
    pacienteEncontrado.fecha_nacimiento = paciente.fecha_nacimiento;

    await pacienteEncontrado.save();
    return pacienteEncontrado;
  }

  static async deleteById(id) {
    const paciente = await Paciente.findByPk(id);
    if (paciente) {
      const respuestaEliminar = await Paciente.destroy({
        where: {
          id_paciente: paciente.id_paciente,
        },
      });

      return respuestaEliminar === 1 ? true : false;
    } else {
      return false;
    }
  }
}
