import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'ahorros',
        loadChildren: () => import('../ahorros/ahorros.module').then(m => m.AhorrosPageModule)
      },
      {
        path: 'contactenos',
        loadChildren: () => import('../contactenos/contactenos.module').then(m => m.ContactenosPageModule)
      },
      {
        path: 'noticias',
        loadChildren: () => import('../noticias/noticias.module').then(m => m.NoticiasPageModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('../servicios/servicios.module').then(m => m.ServiciosPageModule)
      },
      {
        path: 'cartera',
        loadChildren: () => import('../cartera/cartera.module').then(m => m.CarteraPageModule)
      },
      {
        path: 'mvto/:pagare',
        loadChildren: () => import('../mvto/mvto.module').then(m => m.MvtoPageModule)
      },
      {
        path: 'simulador',
        loadChildren: () => import('../simulador/simulador.module').then(m => m.SimuladorPageModule)
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('../notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
      },
      {
        path: 'solicitudes',
        loadChildren: () => import('../solicitudes/solicitudes.module').then(m => m.SolicitudesPageModule)
      },
      {
        path: 'solcre',
        loadChildren: () => import('../solcre/solcre.module').then(m => m.SolcrePageModule)
      },
      {
        path: 'consultadecredito',
        loadChildren: () => import('../consulcre/consulcre.module').then(m => m.ConsulcrePageModule)
      },
      {
        path: 'solserv',
        loadChildren: () => import('../solserv/solserv.module').then(m => m.SolservPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
