import { Component, OnInit } from '@angular/core';

import { CartModel } from '../../models';
import { ProductModel } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cart: CartModel;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // как на счет отписки?
    this.cartService.getCart().subscribe( cart => this.cart = cart);
  }

  onDeleteItem(cartItem: ProductModel): void {
    this.cartService.removeItem(cartItem);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
