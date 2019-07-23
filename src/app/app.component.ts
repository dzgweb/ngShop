import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

import { CartService } from '../app/cart/services/cart.service';
import { AuthService } from '../app/core/services/';

import { CartModel } from '../app/cart/models/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngShop';
  smallCart: CartModel;

  constructor(
    private cartService: CartService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.cartService.getCart().subscribe( cart => this.smallCart = cart);
  }

  // onActivate($event) {
  //   console.log('Activated Component', $event);
  // }

  // onDeactivate($event) {
  //   console.log('Deactivated Component', $event);
  // }

}
