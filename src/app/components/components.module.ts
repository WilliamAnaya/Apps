import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {Observable} from 'rxjs';
import {Componente} from '../interfaces/interfaces';
import {ServicesService} from '../services/services.service';

@NgModule({
    declarations: [
        HeaderComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        MenuComponent
    ]
})
export class ComponentsModule implements OnInit{
    componentes : Observable<Componente[]>;

    constructor(
        private service : ServicesService
    ) { }
    ngOnInit() {

    }
    ionViewWillEnter() {
        this.componentes = this.service.getMenuOpt();
    }
}

