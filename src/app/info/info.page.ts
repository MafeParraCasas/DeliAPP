import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // Importa IonicModule aquí
})
export class InfoPage implements OnInit {
  profile: any = {
    photo: 'assets/imagenes/avatar.jpeg' // Imagen por defecto
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.profile = this.authService.getProfile(); // Obtener el perfil del usuario al inicializar la página
  }
}
