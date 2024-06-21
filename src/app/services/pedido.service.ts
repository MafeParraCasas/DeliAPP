import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidos: any[] = []; // Array para almacenar los pedidos en memoria (esto debería ser reemplazado por una lógica de almacenamiento persistente)

  constructor() { }

  guardarPedido(pedido: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.pedidos.push(pedido);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  obtenerPedidos(): any[] {
    return this.pedidos;
  }
}
