import { Action, createReducer, on } from '@ngrx/store';

import { OrdersState, initialOrdersState } from './orders.state';
import * as OrdersActions from './orders.actions';

export const ordersFeatureKey = 'orders';


const reducer = createReducer(
  initialOrdersState,
  on(OrdersActions.loadOrders, state => {
    console.log('GET_ORDERS action being handled!');
    return {...state};
  }),
);

export function ordersReducer(state: OrdersState | undefined, action: Action) {
  return reducer(state, action);
}
