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
  // cart: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  cartSum: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  qtyItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private localStorage: LocalStorageService
  ) {
    if ( this.localStorage.hasItem() ) {
      this.cart.items = this.localStorage.getItem();
    }
  }

  addItem(product) {
    const cartItem = this.cart.items.find(i => i.id === product.id);

    if (!cartItem) {
      this.cart.items.push(product);
    } else {
      cartItem.count += product.count;
    }
    this.localStorage.setItem(this.cart);

    this.setSum();
    this.setQty();
    console.log(this.cart);
  }

  setSum() {
    const sum: number = this.cart.items.reduce((sum, item) => sum += item.price * item.count, 0);

    this.cart.sum = sum;
    
    this.cartSum.next(sum);
  }

  getSum() {
    return this.cartSum;
  }

  setQty() {
    const countSum: number = this.cart.items.reduce((countSum, item) => countSum += item.count, 0);

    this.cart.total = countSum;

    this.qtyItems.next(countSum);
  }

  getQty() {
    return this.qtyItems;
  }

  getCart() {
    return this.cart.items;
  }

  removeItem(cartItem) {
    const indx = this.cart.items.findIndex(item => item.id === cartItem.id);

    if (indx > -1) {
      this.cart.items.splice(indx, 1);
    }

    this.localStorage.setItem(this.cart);

    this.setSum();
    this.setQty();
  }

  clearCart() {
    this.cart.items.length = 0;
    this.localStorage.clear();
  }
}
