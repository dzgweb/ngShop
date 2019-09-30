import { ProductModel } from './../../products';

export interface IOrders {
  id: number;
  firstName: string;
  lastName?: string;
  address?: string;
  phones: string;
  email?: string;
  items?: Array<ProductModel>;
}

export class OrderModel implements IOrders {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public address: string,
    public phones: string,
    public email: string,
    public items: Array<ProductModel>
  ) {}
}
