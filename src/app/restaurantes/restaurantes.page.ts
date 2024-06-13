import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class RestaurantesPage implements OnInit {
  profile: any = {
    photo: 'assets/imagenes/avatar.jpeg' // Imagen por defecto
  };
  restaurantes = [
    { 
      name: 'El Colombiano',
      image: 'assets/imagenes/colombiano.jpg',
      description: 'Deliciosa comida tipica colombiana',
      phone: '123-456-7890',
      address: 'Calle Principal 78-50, Ciudad'
    },
    { 
      name: 'Ciudad Sabor',
      image: 'assets/imagenes/cartagena.jpg',
      description: 'Comida rápida y saludable',
      phone: '987-654-3210',
      address: 'Avenida las Torres 45-61, Ciudad'
    },
    { 
      name: 'El Parche',
      image: 'assets/imagenes/barbacoa.jpg',
      description: 'Gastronomía Medieval exquisita',
      phone: '555-123-4567',
      address: 'Plaza Central 78-90, Ciudad'
    },
    { 
      name: 'Cienfuegos',
      image: 'assets/imagenes/caribe.jpg',
      description: 'Sabor Argentino',
      phone: '123-456-7890',
      address: 'Cra 4 no 78 -95 12-30, Ciudad'
    },
    { 
      name: 'El asiatico',
      image: 'assets/imagenes/asiatico.jpg',
      description: 'Exquisita comida asiatica',
      phone: '357-456-7890',
      address: 'Centro Internacional 64-30, Ciudad'
    },
    { 
      name: 'El Italiano',
      image: 'assets/imagenes/italiano.jpg',
      description: 'Exquisita comida italiana',
      phone: '789-456-7890',
      address: 'Avenida las Palmas 18-30, Ciudad'
    },
    { 
      name: 'Carnes-Wey',
      image: 'assets/imagenes/spanish.jpg',
      description: 'Carnes Finas',
      phone: '987-654-3210',
      address: 'Avenida Siempre Viva 49-60, Ciudad'
    },
    { 
      name: 'El Frances',
      image: 'assets/imagenes/frances.jpg',
      description: 'Gastronomía francesa ',
      phone: '555-123-4567',
      address: 'Centro Historico 789, Ciudad'
    },
    { 
      name: 'Al Carbon',
      image: 'assets/imagenes/carbon.jpg',
      description: 'Comida Chilena',
      phone: '325-456-7890',
      address: 'Calle Principal 56-89, Ciudad'
    },
    { 
      name: 'El Mexicano',
      image: 'assets/imagenes/mexico.jpg',
      description: 'Comida Mexicana',
      phone: '951-147-7890',
      address: 'Calle Principal 59-99, Ciudad'
    }
    // Agrega más restaurantes según necesites
  ];

  constructor(private navCtrl: NavController, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.profile = this.authService.getProfile();
  }

  goToCompras(restaurante: any) {
    this.router.navigate(['/menu'], {
      queryParams: {
        restaurante: JSON.stringify(restaurante)
      }
    });
  }
}
