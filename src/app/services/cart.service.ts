// cart.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() { }

  getCart(): CartItem[] {
    return this.cart;
  }

  addProduct(product: Product) {
    const existingProduct = this.cart.find(item => item.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeProduct(product: Product) {
    const index = this.cart.findIndex(item => item.product.id === product.id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
