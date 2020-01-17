import { Component, OnInit } from '@angular/core';
import {LoadingController, MenuController} from '@ionic/angular';
import {ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', './css/estilos.css', './css/table.css'],
})
export class HomePage implements OnInit {
  public identity;
  public aportes;
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
      private loadinctrl : LoadingController
              ) { }

  ngOnInit() {

  }

  async ionViewWillEnter(){
    this.identity = await this.getidentity();
    await this.getAportes(this.identity.codasociado);
    await this.getAhorros(this.identity.codasociado);
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  async getidentity(){
    return  await this.Service.getIdentity();
  }

  async getAportes(codigo){
    const loading = await this.loadinctrl.create({
      message: 'Cargando...'
    });
    loading.present();
    this.user.codigo = codigo;
    this.Service.aportes(this.user).subscribe(
        response =>{
          //devuelve token
          this.aportes = response;
          loading.dismiss();
        },
        error =>{
          console.log(<any>error);
          loading.dismiss();
        }
    );

  }

  async getAhorros(codigo){
    const loading = await this.loadinctrl.create({
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
          loading.dismiss();
        }
    );

  }

}
