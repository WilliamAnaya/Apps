import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, MenuController} from '@ionic/angular';
import {ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss' , '../home/css/estilos.css', '../home/css/table.css'],
})
export class ServiciosPage implements OnInit {
  public identity;
  public servicios;
  user = {
    usuario: '',
    password: '',
    codigo: ''
  };
  constructor(
      private menuCtrl: MenuController,
      private Service: ServicesService,
      public alertCtrl: AlertController,
      public loadingCtrl: LoadingController,
  ) {

  }

  ngOnInit() {

  }

  async ionViewWillEnter(){
    this.identity = await this.getidentity();
    await this.getServicios(this.identity.codasociado);
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Sin datos',
      message: 'No hay información para mostrar',
      buttons: ['OK']
    });
    await alert.present();
  }

  async getidentity(){
    return await this.Service.getIdentity();
    this.getServicios(this.identity.codasociado);
  }

  async getServicios(codigo){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.user.codigo = codigo;
    this.Service.servicios(this.user).subscribe(
        response =>{
          //devuelve token
          this.servicios = response;
          if(this.servicios == null){
            this.presentAlert();
          }
          loading.dismiss();
        },
        error =>{
          console.log(<any>error);
          loading.dismiss();
        }
    );

  }

}
