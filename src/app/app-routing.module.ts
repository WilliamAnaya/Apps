import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'contactenos', loadChildren: './pages/contactenos/contactenos.module#ContactenosPageModule' },
  { path: 'tabsl', loadChildren: './pages/tabsl/tabsl.module#TabslPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'ahorros', loadChildren: './pages/ahorros/ahorros.module#AhorrosPageModule' },
  { path: 'noticias', loadChildren: './pages/noticias/noticias.module#NoticiasPageModule' },
  { path: 'salir/:sure', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'servicios', loadChildren: './pages/servicios/servicios.module#ServiciosPageModule' },
  { path: 'cartera', loadChildren: './pages/cartera/cartera.module#CarteraPageModule' },
  { path: 'mvto:pagare', loadChildren: './pages/mvto/mvto.module#MvtoPageModule' },
  { path: 'simulador', loadChildren: './pages/simulador/simulador.module#SimuladorPageModule' },
  { path: 'reset', loadChildren: './pages/reset/reset.module#ResetPageModule' },
  { path: 'notificaciones', loadChildren: './pages/notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'solicitudes', loadChildren: './pages/solicitudes/solicitudes.module#SolicitudesPageModule' },
  { path: 'consulcre', loadChildren: './pages/consulcre/consulcre.module#ConsulcrePageModule' },
  { path: 'solcre', loadChildren: './pages/solcre/solcre.module#SolcrePageModule' },
  { path: 'solserv', loadChildren: './pages/solserv/solserv.module#SolservPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
