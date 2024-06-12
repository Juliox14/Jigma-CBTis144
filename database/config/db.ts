import mysql, { ConnectionOptions } from 'mysql2/promise';

const access: ConnectionOptions = {
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
};
const conn = mysql.createPool(access);
export default conn;