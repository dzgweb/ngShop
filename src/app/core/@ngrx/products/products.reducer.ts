import { Action, createReducer, on } from '@ngrx/store';

import { ProductsState, initialProductsState} from './products.state';
import * as ProductsAction from './products.actions';

export const productsFeatureKey = 'products';

const reducer = createReducer(
  initialProductsState,
  on(ProductsAction.getProducts, state => {
    console.log('GET_PRODUCTS action being handled!');
    return { ...state };
  }),
  on(ProductsAction.getProduct, state => {
    console.log('GET_PRODUCT action being handled!');
    return { ...state };
  }),
  on(ProductsAction.createProduct, state => {
    console.log('CREATE_PRODUCT action being handled!');
    return { ...state };
  }),
  on(ProductsAction.updateProduct, state => {
    console.log('UPDATE_PRODUCTS action being handled!');
    return { ...state };
  }),
  on(ProductsAction.deleteProduct, state => {
    console.log('DELETE_PRODUCTS action being handled!');
    return { ...state };
  }),
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}
