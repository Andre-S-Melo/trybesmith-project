import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  public service: ProductService;

  constructor(service: ProductService = new ProductService()) {
    this.service = service;
  }

  public getAll = async (req: Request, res: Response) => {
    const products = await this.service.getAll();

    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreated = await this.service.create(product);

    return res.status(201).json(productCreated);
  };
}

export default ProductController;
