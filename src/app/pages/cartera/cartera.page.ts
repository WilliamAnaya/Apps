import { Component, OnInit } from '@angular/core';
import {LoadingController, MenuController} from '@ionic/angular';
import {ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.page.html',
  styleUrls: ['./cartera.page.scss', '../home/css/estilos.css', '../home/css/table.css'],
})
export class CarteraPage implements OnInit {
  public identity;
  public cartera;
  user = {
    usuario: '',
    password: '',
    codigo: ''
  };
  public codigo;
  constructor(
      private menuCtrl: MenuController,
      private Service: ServicesService,
      private loadinCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.identity = await this.getidentity();
    await this.getCartera(this.identity.codasociado);
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  async getidentity(){
    return  await this.Service.getIdentity();
  }

  async getCartera(codigo){
    const loading = await this.loadinCtrl.create({
      message: 'Cargando...'
    });
    loading.present();
    this.user.codigo = codigo;
    this.Service.cartera(this.user).subscribe(
        response =>{
          //devuelve token
          loading.dismiss();
          if (response.length !== 1 && response[0].pagare !== '') {
            this.cartera = response;
          }
        },
        error =>{
          console.log(<any>error);
        }
    );

  }

}
