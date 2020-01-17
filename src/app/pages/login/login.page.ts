import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Events} from '@ionic/angular';
import {LoadingController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
whatsappnumber: number;
public token;
public identity;
public respuesta;

    public userData;
    user = {
      usuario: '',
      password: ''
    };

    userNotification= {
        codasoaciado: '',
        useridnotification: '',
    };
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _service: ServicesService,
      public alertCtrl: AlertController,
      public events : Events,
      public loadingController: LoadingController


  ) { }

  ngOnInit() {
      this.salir();

  }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Cargando...',
            duration: 1000
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();

        console.log('Loading dismissed!');
    }

    async presentAlert(messaje) {
        const alert = await this.alertCtrl.create({
            header: 'Error',
            message: messaje,
            buttons: ['OK']
        });

        await alert.present();
    }

  async onSubmit(form) {
      const loading = await this.loadingController.create({
          message: 'Cargando...'
      });
      loading.present();
        this._service.login(this.user, true).subscribe(
        response => {
            this.respuesta = response;
            if(this.respuesta.status!='error'){

            this._service.login(this.user, false).subscribe(
                response => {
                    localStorage.setItem('identity', JSON.stringify(response) );

                    this._router.navigate(['tabs/noticias']);
                    //se crea un evento para ser enviado y recibido desde cualquier componente.
                    this.events.publish('user:signedIn', this.userData = localStorage.setItem('userStorage', JSON.stringify(response)));

                    this.userNotification.codasoaciado = response.codasociado;
                    this.userNotification.useridnotification = this._service.userId;
                    this._service.getNotificationId(this.userNotification).subscribe(
                        response =>{
                            console.log(response)
                        },error1 => {
                            console.log(error1)
                        }
                    );

                    loading.dismiss();

                },
                error => {
                    console.log(<any>error);
                }

            );
        localStorage.setItem('token', response);
        this.respuesta = response;
            }else{
                this.presentAlert(this.respuesta.message);
                loading.dismiss();
            }
        },
        error => {
          console.log(JSON.stringify(<any>error));
        }
        );

  }

    salir(){
        this._route.params.subscribe(params=> {
            let salir = +params['sure'];
            if(salir==1){
                localStorage.clear();
                this.identity = null;
                this.token = null;
            }
        });
    }


}
