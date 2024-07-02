import { Paciente } from "../../database/models/paciente.js";
import { FindError } from "../../error/error.js";

export class PacienteModel {
  // Método que obtiene todos los pacientes
  static async getAll() {
    return await Paciente.findAll();
  }

  // Método que obtiene un paciente por su id
  static async getById(id) {
    const pacienteEncontrado = await Paciente.findOne({
      where: {
        id_paciente: id,
      },
    });

    if (!pacienteEncontrado) {
      throw new FindError(
        `No se encontró al paciente con el id ${id}`,
        404,
        false
      );
    }

    return pacienteEncontrado;
  }

  // Método que crea un paciente
  static async create(paciente) {
    const pacienteCreado = await Paciente.create(paciente);
    return pacienteCreado;
  }

  // Método que actualiza un paciente
  static async update(id, paciente) {
    const pacienteEncontrado = await Paciente.findByPk(id);
    pacienteEncontrado.nombre = paciente.nombre;
    pacienteEncontrado.especie = paciente.especie;
    pacienteEncontrado.estado = paciente.estado;
    pacienteEncontrado.fecha_nacimiento = paciente.fecha_nacimiento;

    await pacienteEncontrado.save();
    return pacienteEncontrado;
  }

  // Método que elimina un paciente por su id
  static async deleteById(id) {
    const paciente = await Paciente.findByPk(id);
    if (paciente) {
      const respuestaEliminar = await Paciente.destroy({
        where: {
          id_paciente: paciente.id_paciente,
        },
      });

      if (respuestaEliminar === 1) {
        return true;
      } else {
        throw new FindError(
          `No se pudo eliminar los datos del paciente con el id ${paciente.id_paciente}`,
          500,
          false
        );
      }
    } else {
      throw new FindError(
        `No se encontró al paciente con el id ${id} para eliminar sus datos`,
        404,
        false
      );
    }
  }
}
