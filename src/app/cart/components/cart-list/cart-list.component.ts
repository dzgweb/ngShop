import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cart;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

}
