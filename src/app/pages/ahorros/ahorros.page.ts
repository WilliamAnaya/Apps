import { Component, OnInit } from '@angular/core';
import {LoadingController, MenuController} from '@ionic/angular';
import {ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.page.html',
  styleUrls: ['./ahorros.page.scss', '../home/css/estilos.css', '../home/css/table.css'],
})
export class AhorrosPage implements OnInit {
  public identity;
  public ahorros;
  user = {
    usuario: '',
    password: '',
    codigo: ''
  };
  public codigo;

  constructor(
      private menuCtrl: MenuController,
      private Service: ServicesService,
      private loadingCtrl: LoadingController,
  ) {

  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.identity = await this.getidentity();
    await this.getAhorros(this.identity.codasociado);
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  async getidentity(){
    return await this.Service.getIdentity();
  }

  async getAhorros(codigo){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });
    loading.present();
    this.user.codigo = codigo;
    this.Service.ahorros(this.user).subscribe(
        response =>{
          //devuelve token
          this.ahorros = response;
          loading.dismiss();
        },
        error =>{
          console.log(<any>error);
        }
    );

  }

}
