import {Sequelize} from 'sequelize';

const { 
   MYSQL_HOST,
   MYSQL_PORT,
   MYSQL_USER,
   MYSQL_PASSWORD,
   MYSQL_DB
}:any = process.env;

// Crear la conexión a la base de datos
const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    port: parseInt(MYSQL_PORT),
    dialect: 'mysql',
    logging: false
});

//Configurar la conexión a la base de datos
export const DBMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log('[DatabaseMySQL]: Connection has been established successfully.');
    } catch (error) {
        console.error('[DatabaseMySQL]: Unable to connect to the database:', error);
    }
};