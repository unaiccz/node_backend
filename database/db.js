import { Sequelize } from "sequelize";
const db = new Sequelize('chat','root','011110',{
    host: 'localhost',
    dialect: 'mysql',
})
export default db;