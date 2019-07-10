import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

import { CartService } from '../app/cart/services/cart.service';
import { AuthService } from '../app/core/services/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngShop';
  smallCart: number;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
   // this.smallCart = this.cartService.getCart();
   // console.log(this.smallCart);
   this.cartService.setQty();
   this.cartService.getQty().subscribe( qty => this.smallCart = qty);
  }

  // onActivate($event) {
  //   console.log('Activated Component', $event);
  // }

  // onDeactivate($event) {
  //   console.log('Deactivated Component', $event);
  // }

}
