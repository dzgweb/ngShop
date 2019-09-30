import { IOrders } from './../../../orders';

export interface OrdersState {
    data: ReadonlyArray<IOrders>;
}

export const initialOrdersState: OrdersState = {
    data: []
};
