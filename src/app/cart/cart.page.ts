import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonButtons, IonMenuButton, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonMenuButton, IonItem, IonList, IonLabel, IonButton]
})
export class CartPage implements OnInit {

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  ngOnInit() {
  }
  cartItems: { product: Product; quantity: number }[] = [];


  removeFromCart(product: Product) {
    this.cartService.removeProduct(product);
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  getTotalQuantity() {
    return this.cartService.getTotalQuantity();
  }

}
