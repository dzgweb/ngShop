import { Component, OnInit } from '@angular/core';

// import { CartModel, CartItemModel } from '../models'
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cart;
  cartSum: number;
  qtyItems: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartService.setSum();
    this.cartService.setQty();
    this.cartService.getQty().subscribe( qty => this.qtyItems = qty);
    this.cartService.getSum().subscribe( sum => this.cartSum = sum);
  }

  onDeleteItem(cartItem) {
    this.cartService.removeItem(cartItem);
  }

  onClearCart() {
    this.cartService.clearCart();
  }
}
