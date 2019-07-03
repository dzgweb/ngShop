import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { CartService } from '../app/cart/services/cart.service'

// rxjs
import { Observable, Subscription} from 'rxjs';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'ngShop';
  private cart$: Observable<any>;
  smallCart: Array<any>;
  sub: Subscription;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
     this.cart$ = this.cartService.getCart();
     this.sub = this.cart$
       .pipe(
         toArray()
       )
       .subscribe(val => this.smallCart = val);
  }

}
