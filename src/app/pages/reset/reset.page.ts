import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  user = {
    usuario: '',
    entidad: 'Fontelmex'
  };
  public respuesta;
  constructor(
      private _service: ServicesService,
      public loadingCtrl: LoadingController,
      public toats: ToastController,
      private _route: ActivatedRoute,
      private _router: Router,
  ) {

  }

  ngOnInit() {
  }

  async onSubmit(form){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });
    loading.present();
    this._service.reset(this.user).subscribe(
        response=>{
          this.presentToast(response.message);
          setTimeout(()=>{    //<<<---    using ()=> syntax
            this._router.navigate(['tabsl/ingresar']);
          }, 2000);
          loading.dismiss();
        },error=>{
          console.log(<any>error)
          loading.dismiss();
        }
    )
  }

  async presentToast(message) {
    const toast = await this.toats.create({
      message,
      position: 'top',
      duration: 12000
    });
    toast.present();
  }





}
