import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline, cartSharp, homeOutline,homeSharp , informationCircleOutline , informationCircleSharp, personCircleOutline, personCircleSharp, restaurantOutline, restaurantSharp, } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
  
})
export class AppComponent {
  public appPages = [ 
    { title: 'Información', url: '/info', icon: 'information-circle' },
    { title: 'inicio', url: '/inicio', icon: 'home' },
    { title: 'Mi Perfil', url: '/mi-perfil', icon: 'person-Circle' },
    { title: 'Mis Compras', url: '/pedido', icon: 'cart' },
    { title: 'Restaurantes', url: '/restaurantes', icon: 'restaurant' },

  ];
  
  constructor() {
    addIcons({ homeOutline, homeSharp, informationCircleOutline, informationCircleSharp,personCircleOutline, personCircleSharp, cartOutline,cartSharp, restaurantOutline, restaurantSharp});
  }
}
