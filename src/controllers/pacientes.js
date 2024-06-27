

export class PacienteController {
    static async getAll(req, res) {
        res.send('Listado de pacientes');
    }
    static async getById(req, res) {
        res.send('Busqueda de paciente por id');
    }
    static async create(req, res) {
        res.send('Crear paciente');
    }
    static async update(req, res){
        res.send('actualizar paciente');
    }
    static async delete(req, res){
        res.send('Eliminar paciente');
    }
}
