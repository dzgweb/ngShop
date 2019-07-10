import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../core/services';

import { BehaviorSubject } from 'rxjs';

import { CartModel, CartItemModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItemModel[] = [];
  cartSum: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  qtyItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private localStorage: LocalStorageService
  ) {

    if ( this.localStorage.hasItem() ) {
      this.cart = this.localStorage.getItem();
    }
  }

  addItem(product) {
    const cartItem = this.cart.find(i => i.id === product.id);

    if (!cartItem) {
      this.cart.push(product);
    } else {
      cartItem.count += product.count;
    }
    this.localStorage.setItem(this.cart);
    this.setQty();
    console.log(this.cart);
  }

  setSum() {
    const sum: number = this.cart.reduce((sum, item) => sum += item.price * item.count, 0);
    this.cartSum.next(sum);
  }

  getSum() {
    return this.cartSum;
  }

  setQty() {
    const countSum: number = this.cart.reduce((countSum, item) => countSum += item.count, 0);
    this.qtyItems.next(countSum);
  }

  getQty() {
    return this.qtyItems;
  }

  getCart() {
    return this.cart;
  }

  removeItem(cartItem) {
    const indx = this.cart.findIndex(item => item.id === cartItem.id);

    if (indx > -1) {
      this.cart.splice(indx, 1);
    }

    this.localStorage.setItem(this.cart);

    this.setSum();
    this.setQty();
  }

  clearCart() {
    this.cart.length = 0;
    this.localStorage.clear();
  }
}
