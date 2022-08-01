import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  public service: OrderService;

  constructor(service: OrderService = new OrderService()) {
    this.service = service;
  }

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.service.getAll();

    return res.status(200).json(orders);
  };
}

export default OrderController;
