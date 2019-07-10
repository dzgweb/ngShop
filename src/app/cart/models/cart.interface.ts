import { ProductModel } from '../../products/models/product.model';

export interface ICart {
  items: ProductModel[];
  total: number;
  sum: number;
}
