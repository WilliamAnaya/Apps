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
        loadChildren: '../login/login.module#LoginPageModule'
      },
      {
        path: 'contactenos',
        loadChildren: '../contactenos/contactenos.module#ContactenosPageModule'
      },
      {
        path: 'reset',
        loadChildren: '../reset/reset.module#ResetPageModule'
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
