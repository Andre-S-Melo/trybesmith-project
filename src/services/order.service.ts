import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';
import Order from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  public prodModel: ProductModel;

  constructor(
    model: OrderModel = new OrderModel(connection),
    prodModel: ProductModel = new ProductModel(connection),
  ) {
    this.model = model;
    this.prodModel = prodModel;
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    const products = await this.prodModel.getAll();
    // Percorremos o array orders e para cada order é feito um spreed do conteúdo e adicionamos uma key productsIds.

    // Para a key productsIds é feito um filter em products, desestruturando a key orderId de products, e filtrando pelo id.

    // Para cada item encontrado no filter é feito um map adicionando ao array da key productsIds.    
    const data = orders.map((order) => ({
      ...order,
      productsIds: products
        .filter(({ orderId }) => orderId === order.id).map((item) => item.id),
    }));

    return data as Order[];
  }
}

export default OrderService;
