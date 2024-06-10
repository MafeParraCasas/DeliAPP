import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonMenuButton]
})
export class RegistrarsePage {
  nombre: string = '';
  email: string = '';
  password: string = '';
  photo: string | ArrayBuffer | null = '';
  imageUrl: string | undefined; // Agrega esta propiedad y asigna un valor por defecto

  constructor(private authService: AuthService, private router: Router) {}

  onFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.photo = reader.result;
      this.imageUrl = reader.result as string; // Actualiza el valor de imageUrl con la URL de la imagen
    };
    if (event.target.files && event.target.files.length > 0) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  register() {
    const user = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      photo: this.photo
    };
    if (this.authService.register(user)) {
      this.router.navigate(['/iniciarsesion']);
    } else {
      alert('El usuario ya existe');
    }
  }
}
