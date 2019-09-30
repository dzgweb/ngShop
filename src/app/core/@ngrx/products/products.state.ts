import { IProduct, ProductModel } from './../../../products';

export interface ProductsState {
    data: ReadonlyArray<IProduct>;
}

export const initialProductsState: ProductsState = {
    data: [
        new ProductModel(1, 'Item 1', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 100, 1, '', '', 2, true),
        new ProductModel(2, 'Item 2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 16, 1, '', '', 2, true),
        new ProductModel(3, 'Item 3', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 50, 1, '', '', 2, true),
    ]
};
