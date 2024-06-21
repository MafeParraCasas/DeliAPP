import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class CartPage implements OnInit {
  profile: any = {
    photo: 'assets/imagenes/avatar.jpeg' // Imagen por defecto
  };

  cartItems: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Añadir el Router
    private authService: AuthService,
    private alertController: AlertController,
    private pedidoService: PedidoService // Inyectar el servicio de pedidos
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['selectedItems']) {
        this.cartItems = JSON.parse(params['selectedItems']);
      }
    });
    this.profile = this.authService.getProfile();
  }

  removeFromCart(product: any) {
    this.cartItems = this.cartItems.filter(item => item.name !== product.name);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  async confirmarPedido() {
    const alert = await this.alertController.create({
      header: 'Confirmar Pedido',
      message: '¿Desea confirmar su pedido?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Pedido cancelado');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.realizarPedido();
          }
        }
      ]
    });

    await alert.present();
  }

  async realizarPedido() {
    const numeroPedido = Date.now().toString(); // Generar un número de pedido único
    const pedido = {
      numeroPedido,
      productos: this.cartItems,
      total: this.getTotal()
    };

    try {
      await this.pedidoService.guardarPedido(pedido);
      const alert = await this.alertController.create({
        header: 'Pedido Realizado',
        message: 'Su pago se realizó exitosamente. El pedido será despachado en breve.',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigate(['/pedido']); // Redirigir a la página de pedidos
            }
          }
        ]
      });

      await alert.present();
      this.cartItems = []; // Vaciar el carrito después de realizar el pedido
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Ocurrió un error al guardar su pedido. Por favor, inténtelo de nuevo.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  pay() {
    this.confirmarPedido();
  }
}
