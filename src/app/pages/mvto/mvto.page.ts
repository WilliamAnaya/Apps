import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, LoadingController, MenuController} from '@ionic/angular';
import {ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-mvto',
  templateUrl: './mvto.page.html',
  styleUrls: ['./mvto.page.scss'],
})
export class MvtoPage implements OnInit {
  public pagare;
  public identity;
  public mvtos;
  public plandepagos;
  public pagosfuturos;
  public codasociado;
  user = {
    usuario: '',
    password: '',
    codigo: '',
    pagare: ''
  };

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private menuCtrl: MenuController,
      private Service: ServicesService,
      public alertCtrl: AlertController,
      private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params=> {
      let pagare = +params['pagare'];
      this.pagare = pagare;
    });
    this.getidentity();
  }

    async presentLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Cargando...',
            duration: 1000
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();

        console.log('Loading dismissed!');
    }

    async presentAlert() {
        const alert = await this.alertCtrl.create({
            header: 'Error',
            message: 'No hay información para mostrar',
            buttons: ['OK']
        });

        await alert.present();
    }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  getidentity(){
    this.identity = this.Service.getIdentity();
  }

  async getMvtos(){
      const loading = await this.loadingCtrl.create({
          message: 'Cargando...'
      });
    loading.present();
    this.user.pagare = this.pagare;
    this.Service.mvtocartera(this.user).subscribe(
        response =>{
          //devuelve token
          this.mvtos = response;
            if(this.mvtos == null){
                this.presentAlert();
            }
          this.plandepagos = null;
          this.pagosfuturos = null;
            loading.dismiss();
        },
        error =>{
          console.log(JSON.stringify(<any>error));
        }
    );
  }

  async getPlandepagos(){
      const loading = await this.loadingCtrl.create({
          message: 'Cargando...'
      });
      loading.present();
    this.user.pagare = this.pagare;
    this.Service.planpagos(this.user).subscribe(
        response =>{
          //devuelve token
          this.plandepagos = response;
          if(this.plandepagos == null){
            this.presentAlert();
          }
          this.pagosfuturos = null;
          this.mvtos = null;
            loading.dismiss();
        },
        error =>{
          console.log(JSON.stringify(<any>error));
            this.presentAlert();
            loading.dismiss();
        }
    );
  }

  async getPagosfuturos(){
      const loading = await this.loadingCtrl.create({
          message: 'Cargando...'
      });
      loading.present();
    this.user.pagare = this.pagare;
    this.Service.pagosfaltantes(this.user).subscribe(
        response =>{
          //devuelve token
          this.pagosfuturos = response;
            if(this.pagosfuturos == null){
                this.presentAlert();
            }
          this.mvtos = null;
          this.plandepagos = null;
            loading.dismiss();
        },
        error =>{
          console.log(JSON.stringify(<any>error));
            this.presentAlert();
            loading.dismiss();
        }
    );
  }

}
