import { ICart } from './cart.interface';
import { ProductModel } from '../../products/models/product.model';

export class CartModel implements ICart {
  constructor(
    public items: ProductModel[] = [],
    public total: number = 0,
    public sum: number = 0
  ) { }
}
