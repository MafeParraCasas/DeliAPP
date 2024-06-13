import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa Router
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class MenuPage implements OnInit {
    profile: any = {
      photo: 'assets/imagenes/avatar.jpeg' // Imagen por defecto
    };
        
    restaurante: any;
    menus: any[] = [];
    selectedMenus: { [key: string]: number } = {};
    
    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }
    
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if (params && params['restaurante']) {
          this.restaurante = JSON.parse(params['restaurante']);
          this.loadMenus();
        }
      });
      this.profile = this.authService.getProfile();
    }
    
    loadMenus() {
      // Aquí puedes cargar los menús basados en el restaurante seleccionado
      // Esto es solo un ejemplo estático
      if (this.restaurante.name === 'El Colombiano') {
        this.menus = [
          { 
            name: 'Bandeja Paisa', 
            price: 20000, 
            description: 'Arroz, frijoles, chicharrón, carne molida, huevo, plátano maduro y arepa',
            image: '/assets/imagenes/bandeja-paisa.jpg' // Agrega la URL de la imagen aquí
          },
          { 
            name: 'Ajiaco', 
            price: 18000, 
            description: 'Sopa típica con pollo, papa, maíz y guascas',
            image: '/assets/imagenes/ajiaco.jpg' // Agrega la URL de la imagen aquí
          },
          { 
            name: 'Sancocho', 
            price: 22000, 
            description: 'Sancocho de gallina, pierna pernil, arroz y aguacate',
            image: '/assets/imagenes/sancocho.jpg' // Agrega la URL de la imagen aquí
          },
          { 
            name: 'Arroz con Pollo', 
            price: 15000, 
            description: 'Arroz con pollo, papas fritas y consome',
            image: '/assets/imagenes/arroz-con-pollo.jpg' // Agrega la URL de la imagen aquí
          }
        ];
      }
      if (this.restaurante.name === 'Ciudad Sabor') {
        this.menus = [
          { 
            name: 'Aroz con coco', 
            price: 45000, 
            description: 'Arroz con coco, patacon y ensalada',
            image: '/assets/imagenes/arrozCoco.jpg' // Agrega la URL de la imagen aquí
          },
          { 
            name: 'Sopa de bagre', 
            price: 32000, 
            description: 'Sopa de bagre con arrzo, aguacate y jugo',
            image: '/assets/imagenes/sopaBagre.jpg' // Agrega la URL de la imagen aquí
          },
          { 
            name: 'Pulp marinado', 
            price: 65000, 
            description: 'Pulpo marinado a las brasas',
            image: '/assets/imagenes/pulpo.jpg' // Agrega la URL de la imagen aquí
          },
          { 
            name: 'Seviche', 
            price: 78000, 
            description: 'Frescos mariscon con patacon',
            image: '/assets/imagenes/seviche.jpg' // Agrega la URL de la imagen aquí
          }
        ];
      }
      // Agrega más menús para otros restaurantes aquí
    
      // Inicializar selectedMenus
      this.menus.forEach(menu => {
        this.selectedMenus[menu.name] = 0;
      });
    }
    
    adjustQuantity(menu: any, increment: boolean) {
      if (increment) {
        this.selectedMenus[menu.name]++;
      } else {
        if (this.selectedMenus[menu.name] > 0) {
          this.selectedMenus[menu.name]--;
        }
      }
    }
    
    pay() {
      const selectedItems = this.menus.filter(menu => this.selectedMenus[menu.name] > 0)
        .map(menu => ({ ...menu, quantity: this.selectedMenus[menu.name] }));
      
      // Navegar al carrito de pago pasando los menús seleccionados
      this.router.navigate(['/cart'], {
        queryParams: {
          selectedItems: JSON.stringify(selectedItems)
        }
      });
    }
  }