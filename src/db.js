import { DataTypes, Model, Sequelize } from "sequelize";

const sequelize = new Sequelize("db_veterinaria", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

class Paciente extends Model {}

Paciente.init(
  {
    id_paciente:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    especie:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    fecha_nacimiento:{
        type: DataTypes.DATE,
        allowNull: false,
    },
  },
  { sequelize, modelName: "paciente" }
);

export { Paciente };
//prueba de conexión

// async function testConnection(){
//     try{
//         await sequelize.authenticate();
//         console.log("Conexión exitosa!!");
//     } catch (error){
//         console.error("Error al realizar la conexión: ", error);
//     }
// }

// testConnection();
