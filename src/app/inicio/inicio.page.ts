import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonAvatar, IonSearchbar } from '@ionic/angular/standalone';
import { IonLabel, IonBreadcrumb, IonIcon, IonBreadcrumbs } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service'; // Importar AuthService

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonAvatar, IonSearchbar, IonLabel, IonBreadcrumb, IonIcon, IonBreadcrumbs]
})
export class InicioPage implements OnInit {
  profile: any;

  constructor(private authService: AuthService) { // Inyectar AuthService
    addIcons({});
  }

  ngOnInit() {
    this.profile = this.authService.getProfile(); // Obtener el perfil del usuario al inicializar la página
  }
}
