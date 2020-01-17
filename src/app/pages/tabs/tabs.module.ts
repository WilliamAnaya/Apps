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
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'ahorros',
        loadChildren: '../ahorros/ahorros.module#AhorrosPageModule'
      },
      {
        path: 'contactenos',
        loadChildren: '../contactenos/contactenos.module#ContactenosPageModule'
      },
      {
        path: 'noticias',
        loadChildren: '../noticias/noticias.module#NoticiasPageModule'
      },
      {
        path: 'servicios',
        loadChildren: '../servicios/servicios.module#ServiciosPageModule'
      },
      {
        path: 'cartera',
        loadChildren: '../cartera/cartera.module#CarteraPageModule'
      },
      {
        path: 'mvto/:pagare',
        loadChildren: '../mvto/mvto.module#MvtoPageModule'
      },
      {
        path: 'simulador',
        loadChildren: '../simulador/simulador.module#SimuladorPageModule'
      },
      {
        path: 'notificaciones',
        loadChildren: '../notificaciones/notificaciones.module#NotificacionesPageModule'
      },
      {
        path: 'solicitudes',
        loadChildren: '../solicitudes/solicitudes.module#SolicitudesPageModule'
      },
      {
        path: 'solcre',
        loadChildren: '../solcre/solcre.module#SolcrePageModule'
      },
      {
        path: 'consultadecredito',
        loadChildren: '../consulcre/consulcre.module#ConsulcrePageModule'
      },
      {
        path: 'solserv',
        loadChildren: '../solserv/solserv.module#SolservPageModule'
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
