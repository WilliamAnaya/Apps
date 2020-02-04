import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'contactenos', loadChildren: () => import('./pages/contactenos/contactenos.module').then(m => m.ContactenosPageModule) },
  { path: 'tabsl', loadChildren: () => import('./pages/tabsl/tabsl.module').then(m => m.TabslPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'ahorros', loadChildren: () => import('./pages/ahorros/ahorros.module').then(m => m.AhorrosPageModule) },
  { path: 'noticias', loadChildren: () => import('./pages/noticias/noticias.module').then(m => m.NoticiasPageModule) },
  { path: 'salir/:sure', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'servicios', loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosPageModule) },
  { path: 'cartera', loadChildren: () => import('./pages/cartera/cartera.module').then(m => m.CarteraPageModule) },
  { path: 'mvto:pagare', loadChildren: () => import('./pages/mvto/mvto.module').then(m => m.MvtoPageModule) },
  { path: 'simulador', loadChildren: () => import('./pages/simulador/simulador.module').then(m => m.SimuladorPageModule) },
  { path: 'reset', loadChildren: () => import('./pages/reset/reset.module').then(m => m.ResetPageModule) },
  { path: 'notificaciones', loadChildren: () => import('./pages/notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule) },
  { path: 'solicitudes', loadChildren: () => import('./pages/solicitudes/solicitudes.module').then(m => m.SolicitudesPageModule) },
  { path: 'consulcre', loadChildren: () => import('./pages/consulcre/consulcre.module').then(m => m.ConsulcrePageModule) },
  { path: 'solcre', loadChildren: () => import('./pages/solcre/solcre.module').then(m => m.SolcrePageModule) },
  { path: 'solserv', loadChildren: () => import('./pages/solserv/solserv.module').then(m => m.SolservPageModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
