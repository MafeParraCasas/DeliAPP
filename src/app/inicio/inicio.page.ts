import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonAvatar, IonSearchbar, IonButton } from '@ionic/angular/standalone';
import { IonLabel, IonBreadcrumb, IonIcon, IonBreadcrumbs } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service'; // Importar AuthService
import { Router } from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, 
    IonAvatar, IonSearchbar, IonLabel, IonBreadcrumb, IonIcon, IonBreadcrumbs, IonButton]
})
export class InicioPage implements OnInit {

  profile: any;

  promotions = [
    {
      image: '../../assets/imagenes/promoSopas.jpg',
      name: 'Promo Sopas',
      description: 'Deliciosa comida con un 15% de descuento',
      discount: 20
    },
    {
      image: '../../assets/imagenes/promoJugos.jpg',
      name: 'Promo Jugos',
      description: 'Refrescantes bebidas con un 7% de descuento',
      discount: 15
    },
    {
      image: '../../assets/imagenes/promoMariscos.jpg',
      name: 'Promo Mariscos',
      description: 'Deliciosos postres con un 4% de descuento',
      discount: 10
    },
    {
      image: '../../assets/imagenes/promoPasta.jpg',
      name: 'Promo Pasta',
      description: 'Deliciosa comida con un 10% de descuento',
      discount: 20
    },
    {
      image: '../../assets/imagenes/promoCarnes.jpg',
      name: 'Promo Carnes',
      description: 'Refrescantes bebidas con un 12% de descuento',
      discount: 15
    },
    {
      image: '../../assets/imagenes/promoPescados.jpg',
      name: 'Promo Pescados',
      description: 'Deliciosos postres con un 18% de descuento',
      discount: 10
    }
    // Agrega más promociones según sea necesario
  ];

  constructor(private authService: AuthService, private router: Router) { // Inyectar AuthService
    addIcons({});
  }

  ngOnInit() {
    this.profile = this.authService.getProfile(); // Obtener el perfil del usuario al inicializar la página
  }

  navigateToRestaurantes() {
    // Aquí realizas la navegación a la página de restaurantes
    this.router.navigate(['/restaurantes']);
  }
}
