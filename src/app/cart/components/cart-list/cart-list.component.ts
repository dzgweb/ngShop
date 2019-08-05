import { Component, OnInit, OnDestroy } from '@angular/core';

// rxjs
import { Subscription } from 'rxjs';

import { CartModel } from '../../models';
import { ProductModel } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  cart: CartModel;

  private sub: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.getCart()
      .subscribe(
        cart => {
          this.cart = cart;
        },
        err => console.log(err)
      );
    console.log(this.cart);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onIncrementItem(cartItem: ProductModel): void {
    this.cartService.incrementItem(cartItem);
  }

  onDecrementItem(cartItem: ProductModel): void {
    this.cartService.decrementItem(cartItem);
  }

  onDeleteItem(cartItem: ProductModel): void {
    this.cartService.removeItem(cartItem);
  }

  onChangeQtyItem(cartItem: ProductModel): void {
    this.cartService.changeQtyItem(cartItem);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  dateOrder() {
    return new Date();
  }

}
