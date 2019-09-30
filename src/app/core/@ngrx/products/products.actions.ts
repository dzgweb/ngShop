import { createAction, props } from '@ngrx/store';

import { IProduct } from './../../../products';

export const getProducts = createAction('[Products] GET_PRODUCTS');

export const getProduct = createAction(
  '[Products] GET_PRODUCT',
  props<{ productID: number }>()
);

export const createProduct = createAction(
  '[Products] CREATE_PRODUCTS',
  props<{ product: IProduct }>()
);

export const updateProduct = createAction(
  '[Products] UPDATE_PRODUCT',
  props<{ product: IProduct }>()
);

export const deleteProduct = createAction(
  '[Products] DELETE_PRODUCT',
  props<{ product: IProduct }>()
);
