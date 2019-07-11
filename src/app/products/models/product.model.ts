import { IProduct } from './product.interface';
import { ProductCategory } from './category.enum';

export class ProductModel implements IProduct {
 constructor(
  public id: number = null,
  public title: string = '',
  public desc?: string,
  public price: number = 0,
  public count: number = 0,
  public size?: string,
  public images?: string, // может единственное число image?
  public category: ProductCategory = null,
  public isAvailable?: boolean
 ) {
  this.desc = desc || '';
  this.images = images || 'http://via.placeholder.com/400x400';
  this.isAvailable = isAvailable || false;
 }
}
