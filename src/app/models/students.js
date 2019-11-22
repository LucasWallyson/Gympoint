import Sequelize, { Model } from 'sequelize';

class Students extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.NUMBER,
        peso: Sequelize.NUMBER,
        altura: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Students;
