import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";

const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'todos',
    logging: false,
    models: [Todos],
});

export default connection;