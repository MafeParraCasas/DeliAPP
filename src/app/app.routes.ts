import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },

  {
    path: 'compras',
    loadComponent: () => import('./compras/compras.page').then( m => m.ComprasPage)
  },
  {
    path: 'mi-perfil',
    loadComponent: () => import('./mi-perfil/mi-perfil.page').then( m => m.MiPerfilPage)
  },
  {
    path: 'restaurantes',
    loadComponent: () => import('./restaurantes/restaurantes.page').then( m => m.RestaurantesPage)
  },
  {
    path: 'info',
    loadComponent: () => import('./info/info.page').then( m => m.InfoPage)
  },

];
