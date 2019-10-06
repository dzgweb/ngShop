import { IOrders, OrderModel } from './../../../orders';

export interface OrdersState {
    data: ReadonlyArray<IOrders>;
}

export const initialOrdersState: OrdersState = {
    data: [
      new OrderModel(1, 'Petr', 'Semenov', 'Minsk Pushkina 20', '777-88-99', 'mail@mail.ru', []),
      new OrderModel(2, 'Sveta', 'Semenov', 'Minsk Pushkina 20', '777-88-99', 'mail@mail.ru', []),
      new OrderModel(3, 'Sergey', 'Semenov', 'Minsk Pushkina 20', '777-88-99', 'mail@mail.ru', []),
    ]
};
