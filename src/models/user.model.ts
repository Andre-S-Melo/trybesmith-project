import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

class UserModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    const { insertId: id } = result;
    const newUser: User = { id, username, classe, level, password };
    return newUser;
  }
}

export default UserModel;
