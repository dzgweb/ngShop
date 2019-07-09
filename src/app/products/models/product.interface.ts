import { ProductCategory } from './category.enum';

export interface IProduct {
  id: number;
  title: string;
  desc?: string;
  price: number;
  count: number;
  size?: string;
  images?: string;
  category: ProductCategory;
  isAvailable?: boolean;
}
