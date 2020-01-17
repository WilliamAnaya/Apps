import {ApplicationRef, Component, OnInit} from '@angular/core';
import {LoadingController, MenuController} from '@ionic/angular';
import {ServicesService} from '../../services/services.service';
import {OSNotificationPayload} from '@ionic-native/onesignal';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  mensajes: OSNotificationPayload[]=[];
  constructor(
      private menuCtrl: MenuController,
      private Service: ServicesService,
      private loadinctrl : LoadingController,
      private applicationRef: ApplicationRef
  ) { }

  ngOnInit() {
    this.Service.pushListener.subscribe(noti=>{
      this.mensajes.unshift(noti);
      this.applicationRef.tick();
    });
  }
  async ionViewWillEnter(){
    this.mensajes = await this.Service.getMensajes();
    console.log('Will enter - cargar mensajes');
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }



}
