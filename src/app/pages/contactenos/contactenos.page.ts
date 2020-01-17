import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {
  public identity;

  contact= {
    usuario: '',
    name: '',
    surname: '',
    correo: '',
    message: '',
    entidad: 'Fontelmex'
  };


  constructor(
      private Service: ServicesService,
      public toast: ToastController,
      public loadingCtrl: LoadingController
  ) {

  }

  ngOnInit() {
   this.identity = JSON.parse(localStorage.getItem('identity'));
  }

  async onSubmit(form){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });
    loading.present();
    this.contact.usuario = this.identity.usuario;
    this.contact.name = this.identity.name;
    this.contact.surname = this.identity.surname;
    this.contact.correo = this.identity.email;

      this.Service.contactenos(this.contact).subscribe(
           response=>{
             this.presentToast(response.message);
             loading.dismiss();
           },error=>{
             console.log(<any>error)
            loading.dismiss();
           }
       )
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message,
      position: 'middle',
      duration: 17000
    });
    toast.present();
  }

}
