import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class PedidoPage implements OnInit {
  
  profile: any = {
    photo: 'assets/imagenes/avatar.jpeg' // Imagen por defecto
  };

  historialPedidos: any[] = [];

  constructor(private pedidoService: PedidoService, private alertController: AlertController, private authService: AuthService) { }

  ngOnInit() {
    this.obtenerHistorialPedidos();
    this.profile = this.authService.getProfile();
  }

  obtenerHistorialPedidos() {
    this.historialPedidos = this.pedidoService.obtenerPedidos();
  }

  getTotal(): number {
    return this.historialPedidos.reduce((total: number, pedido: any) => total + pedido.total, 0);
  }
}
