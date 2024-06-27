import { Sequelize } from "sequelize";

const sequelize= new Sequelize("db_veterinaria", "root", "root", { 
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

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