import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'iniciarsesion',
    pathMatch: 'full',
  },

  {
    path: 'iniciarsesion',
    loadComponent: () => import('./iniciarsesion/iniciarsesion.page').then( m => m.IniciarsesionPage)
  },

  {
    path: 'registrarse',
    loadComponent: () => import('./registrarse/registrarse.page').then( m => m.RegistrarsePage)
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
    path: 'pedido',
    loadComponent: () => import('./pedido/pedido.page').then( m => m.PedidoPage)
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
  {
    path: 'pagar',
    loadComponent: () => import('./pagos/pagos.page').then( m => m.PagosPage)
  },

  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.page').then( m => m.CartPage)
  },

  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
];
