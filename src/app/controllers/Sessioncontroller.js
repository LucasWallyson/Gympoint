import jwt from 'jsonwebtoken';
// import * as Yup from 'yup';
import authconfig from '../../config/auth';
import User from '../models/user';
import Students from '../models/students';

class Sessioncontroller {
  async store1(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    if (!password) {
      return res.status(401).json({ error: 'Password not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'password does not match' });
    }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authconfig.secret, {
        expiresIn: authconfig.expiresIn,
      }),
    });
  }

  async store2(req, res) {
    const { email } = req.body;

    const user = await Students.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authconfig.secret, {
        expiresIn: authconfig.expiresIn,
      }),
    });
  }
}

export default new Sessioncontroller();
