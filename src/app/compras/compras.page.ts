import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonButtons, IonMenuButton, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonMenuButton, IonItem, IonList, IonLabel, IonButton]
})
export class ComprasPage implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Pollo asado', price: 10 },
    { id: 2, name: 'Pollo apanado', price: 20 },
    { id: 3, name: 'Helado de vainilla', price: 30 },
    { id: 4, name: 'Carne a la llanera', price: 15 },
  ];
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }

}
