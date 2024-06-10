import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { addIcons } from 'ionicons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonAvatar,IonSearchbar} from '@ionic/angular/standalone';
import { IonLabel,IonBreadcrumb,IonIcon,IonBreadcrumbs} from '@ionic/angular/standalone';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton,IonAvatar,IonSearchbar,IonLabel,IonBreadcrumb,IonIcon,IonBreadcrumbs]
})
export class MiPerfilPage implements OnInit {
  profile: any;
  editingProfile: boolean = false;
  newNombre: string = '';
  newEmail: string = '';
  newPhoto: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.profile = this.authService.getProfile();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/iniciarsesion']);
  }

  toggleEditing() {
    this.editingProfile = true;
    // Inicializar los campos de edición con los valores actuales del perfil
    this.newNombre = this.profile.nombre;
    this.newEmail = this.profile.email;
  }

  cancelEditing() {
    this.editingProfile = false;
    // Restaurar los datos originales si se cancela la edición
    this.newNombre = '';
    this.newEmail = '';
    this.newPhoto = null;
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.newPhoto = event.target.files[0];
    }
  }

  saveChanges() {
    // Crear un nuevo objeto de perfil actualizado
    let updatedProfile = {
      ...this.profile,
      nombre: this.newNombre,
      email: this.newEmail,
      oldEmail: this.profile.email // Agregar el correo antiguo para la búsqueda
    };

    const updateProfileAndView = (profile: any) => {
      this.authService.updateProfile(profile);
      this.profile = profile; // Actualizar el perfil en la vista
      this.editingProfile = false;
      this.newNombre = '';
      this.newEmail = '';
      this.newPhoto = null;
    };

    if (this.newPhoto) {
      // Si se ha seleccionado una nueva foto, actualizarla en el perfil
      const reader = new FileReader();
      reader.onload = () => {
        updatedProfile.photo = reader.result;
        updateProfileAndView(updatedProfile);
      };
      reader.readAsDataURL(this.newPhoto);
    } else {
      updateProfileAndView(updatedProfile);
    }
  }
}