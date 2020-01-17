import { Component, OnInit } from '@angular/core';
import {LoadingController, MenuController} from '@ionic/angular';
import {ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  constructor(
      private menuCtrl: MenuController,
      private Service: ServicesService,
      private loadinctrl : LoadingController
  ) { }

  ngOnInit() {
    this.presentLoading();
  }

  async ionViewWillEnter(){

  }

  async presentLoading() {
    const loading = await this.loadinctrl.create({
      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
