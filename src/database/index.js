import Sequelize from 'sequelize';
import User from '../app/models/user';
import Students from '../app/models/students';
import databaseConfig from '../config/database';

const models = [User];
const students = [Students];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    students.map(model => model.init(this.connection));
  }
}

export default new Database();
