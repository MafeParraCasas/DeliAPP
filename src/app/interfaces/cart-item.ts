// cart-item.ts

import { Product } from './product';

// Interfaz para definir la estructura de un elemento en el carrito
export interface CartItem {
  product: Product;
  quantity: number;
}
