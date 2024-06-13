import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonAvatar, IonSearchbar, IonButton } from '@ionic/angular/standalone';
import { IonLabel, IonBreadcrumb, IonIcon, IonBreadcrumbs } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
  standalone: true,
  imports: [IonicModule, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, 
    IonAvatar, IonSearchbar, IonLabel, IonBreadcrumb, IonIcon, IonBreadcrumbs, IonButton]
})
export class PedidoPage implements OnInit {
  profile: any = {
    photo: 'assets/imagenes/avatar.jpeg' // Imagen por defecto
  };

  historialPedidos: any[] = [];
  cartItems: any[] = [];

  constructor(private pedidoService: PedidoService, private alertController: AlertController) { }

  ngOnInit() {
    // Obtener historial de pedidos
    this.obtenerHistorialPedidos();
  }

  obtenerHistorialPedidos() {
    // Lógica para obtener el historial de pedidos
    // Por ejemplo, podrías obtenerlos del servicio de pedidos
    this.historialPedidos = [
      { numeroPedido: '0001', productos: [{ nombre: 'Producto 1', precio: 10 }, { nombre: 'Producto 2', precio: 20 }], total: 30 },
      { numeroPedido: '0002', productos: [{ nombre: 'Producto 3', precio: 15 }], total: 15 }
    ];
  }

  getTotal(): number {
    return this.cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
  }
  

  async confirmarPedido() {
    // Lógica para confirmar el pedido
  }

  async mostrarMensaje(header: string, message: string) {
    // Lógica para mostrar un mensaje
  }
}
