import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabslPage } from './tabsl.page';

const routes: Routes = [
  {
    path: '',
    component: TabslPage,
    children: [
      {
        path: 'ingresar',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'contactenos',
        loadChildren: () => import('../contactenos/contactenos.module').then(m => m.ContactenosPageModule)
      },
      {
        path: 'reset',
        loadChildren: () => import('../reset/reset.module').then(m => m.ResetPageModule)
      }
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
  declarations: [TabslPage]
})
export class TabslPageModule {}
