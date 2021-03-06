import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../core/services';

import { BehaviorSubject } from 'rxjs';

import { CartModel } from '../models';
import { ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModel = new CartModel();

  cartSubject: BehaviorSubject<CartModel> = new BehaviorSubject<CartModel>(this.cart);
  public cartCannel$ = this.cartSubject.asObservable();

  constructor(private localStorage: LocalStorageService) {
    if ( this.localStorage.hasItem() ) {
      this.cart = this.localStorage.getItem();
      this.cartSubject.next(this.cart);
    }
  }

  getCart(): BehaviorSubject<CartModel> {
    return this.cartSubject;
  }

  addItem(product: ProductModel): void {
    const cartItem = this.cart.items.find(i => i.id === product.id);

    if (!cartItem) {
      this.cart.items.push(product);
    } else {
      cartItem.count += product.count;
    }

    this.updateTotals();
  }

  removeItem(cartItem: ProductModel): void {
    const indx = this.cart.items.findIndex(item => item.id === cartItem.id);

    if (indx > -1) {
      this.cart.items.splice(indx, 1);
    }

    this.updateTotals();
  }

  incrementItem(updCartItem: ProductModel): void {
    const cartItem = this.cart.items.find((item) => item.id === updCartItem.id);

    cartItem.count += 1;
    this.updateTotals();
  }

  decrementItem(updCartItem: ProductModel): void {
    const cartItem = this.cart.items.find((item) => item.id === updCartItem.id);

    cartItem.count -= 1;
    this.updateTotals();
  }

  changeQtyItem(updCartItem: ProductModel): void {
    const cartItem = this.cart.items.find((item) => item.id === updCartItem.id);

    cartItem.count = +updCartItem.count;
    this.updateTotals();
  }


  clearCart(): void {
    this.cart = new CartModel();
    this.localStorage.clear();
    this.cartSubject.next(this.cart);
  }

  updateTotals(): void {
    this.cart.total = this.getTotalQty();
    this.cart.sum = this.getTotalSum();

    this.localStorage.setItem(this.cart);
    this.cartSubject.next(this.cart);
  }

  private getTotalQty(): number {
    const totalQty: number = this.cart.items.reduce(
      (countSum, item) => (countSum += item.count), 0
    );

    return totalQty;
  }

  private getTotalSum(): number {
    const totalSum: number = this.cart.items.reduce((sum, item) => sum += item.price * item.count, 0);

    return totalSum;
  }

}
