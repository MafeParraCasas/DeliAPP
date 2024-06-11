import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';



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
export class RestaurantesPage {
  restaurantes = [
    { 
      name: 'El Colombiano',
      image: 'assets/imagenes/colombiano.PNG',
      description: 'Deliciosa comida tipica colombiana',
      phone: '123-456-7890',
      address: 'Calle Principal 78-50, Ciudad'
    },
    { 
      name: 'Ciudad Sabor',
      image: 'assets/imagenes/cartagena.PNG',
      description: 'Comida rápida y saludable',
      phone: '987-654-3210',
      address: 'Avenida las Torres 45-61, Ciudad'
    },
    { 
      name: 'El Parche',
      image: 'assets/imagenes/barbacoa.PNG',
      description: 'Gastronomía Medieval exquisita',
      phone: '555-123-4567',
      address: 'Plaza Central 78-90, Ciudad'
    },
    { 
      name: 'Cienfuegos',
      image: 'assets/imagenes/caribe.PNG',
      description: 'Sabor Argentino',
      phone: '123-456-7890',
      address: 'Cra 4 no 78 -95 12-30, Ciudad'
    },
    { 
      name: 'El asiatico',
      image: 'assets/imagenes/asiatico.PNG',
      description: 'Exquisita comida asiatica',
      phone: '357-456-7890',
      address: 'Centro Internacional 64-30, Ciudad'
    },
    { 
      name: 'El Italiano',
      image: 'assets/imagenes/italian.PNG',
      description: 'Exquisita comida italiana',
      phone: '789-456-7890',
      address: 'Avenida las Palmas 18-30, Ciudad'
    },
    { 
      name: 'Carnes-Wey',
      image: 'assets/imagenes/spanish.PNG',
      description: 'Carnes Finas',
      phone: '987-654-3210',
      address: 'Avenida Siempre Viva 49-60, Ciudad'
    },
    { 
      name: 'El Frances',
      image: 'assets/imagenes/frances.PNG',
      description: 'Gastronomía francesa ',
      phone: '555-123-4567',
      address: 'Centro Historico 789, Ciudad'
    },
    { 
      name: 'Al Carbon',
      image: 'assets/imagenes/carbon.PNG',
      description: 'Comida Chilena',
      phone: '325-456-7890',
      address: 'Calle Principal 56-89, Ciudad'
    },
    { 
      name: 'El Mexicano',
      image: 'assets/imagenes/mexico.PNG',
      description: 'Comida Mexicana',
      phone: '951-147-7890',
      address: 'Calle Principal 59-99, Ciudad'
    }
  ];

  constructor(private navCtrl: NavController) {}

  goToCompras() {
    this.navCtrl.navigateForward('/compras');
  }
 
}