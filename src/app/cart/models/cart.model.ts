import { ICart } from './cart.interface';
import { ICartItem } from './cart-item.interface';

export class CartModel implements ICart {
  constructor(
    public items: ICartItem[] = [],
    public total: number = 0,
    public sum: string = '',
  ) { }
}
