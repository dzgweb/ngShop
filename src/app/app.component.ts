import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

import { CartService } from '../app/cart/services/cart.service';
import { AuthService } from '../app/core/services/';

import { CartModel } from '../app/cart/models/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('appTitle', { static: false })
  title: ElementRef<HTMLHeadingElement>;

  smallCart: CartModel;

  constructor(
    private cartService: CartService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.cartService.getCart().subscribe( cart => this.smallCart = cart);
  }

  ngAfterViewInit() {
    this.title.nativeElement.textContent = 'Welcome to Angular shop!';
  }

  onActivate($event) {
    console.log('Activated Component', $event);
  }

  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }

}
