import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  public service: UserService;

  constructor(service: UserService = new UserService()) {
    this.service = service;
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.service.create(user);

    return res.status(201).json(userCreated);
  };
}

export default UserController;
