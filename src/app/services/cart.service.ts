import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { product: Product; quantity: number }[] = [];

  addProduct(product: Product) {
    const existingProduct = this.cart.find(
      (item) => item.product.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeProduct(product: Product) {
    const index = this.cart.findIndex(
      (item) => item.product.id === product.id
    );
    if (index > -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }

  getCart() {
    return this.cart;
  }

  getTotalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  getTotalQuantity() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }
}
