import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

dotenv.config();

class UserService {
  public model: UserModel;

  constructor(model: UserModel = new UserModel(connection)) {
    this.model = model;
  }

  public async create(user: User) {
    const newUser = await this.model.create(user);

    const jwtConfig: SignOptions = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: newUser.username }, 'JWT_SECRET', jwtConfig);

    return { token };
  }
}

export default UserService;
