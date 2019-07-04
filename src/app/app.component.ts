import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { CartService } from '../app/cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'ngShop';
  smallCart: Array<any>;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.smallCart = this.cartService.getCart();
  }

}
