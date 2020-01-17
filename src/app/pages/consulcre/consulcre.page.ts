import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-consulcre',
  templateUrl: './consulcre.page.html',
  styleUrls: ['./consulcre.page.scss'],
})
export class ConsulcrePage implements OnInit {
  consulcred = {
    monto: '',
    linea: '',
    plazo: '',
    frecuencia: '',
    telefono: '',
    celular: '',
    name: '',
    surname: '',
    usuario: '',
    email: '',
  };
  public lineas;
  public plazos;
  public lineaselec;
  public identity;

  constructor(
      private Service: ServicesService,
      public toast: ToastController,
  ) { }

  ngOnInit() {
    this.getLineas();
    this.identity = JSON.parse(localStorage.getItem('identity'));
  }

  getLineas(){
    this.Service.lineassim(this.consulcred).subscribe(
        response=>{
          this.lineas = response;
        },
        error=>{
          console.log(<any>error);
        }
    )
  }

  getPlazos($even){
    this.lineaselec = $even.target.value;
    this.consulcred.linea = $even.target.value;
    this.Service.plazos(this.consulcred).subscribe(
        response=>{
          this.plazos = response;

        },
        error=>{
          console.log(<any>error);
        }
    );
  }

  onSubmit(){
    this.consulcred.usuario = this.identity.usuario;
    this.consulcred.name = this.identity.name;
    this.consulcred.surname = this.identity.surname;
    this.consulcred.email = this.identity.email;

    this.Service.enviarConsultadeCredito(this.consulcred).subscribe(
        response=>{
          this.presentToast(response.message)
        },error=>{
          console.log(<any>error)
        }
    )
  }
  async presentToast(message) {
    const toast = await this.toast.create({
      message,
      position: 'middle',
      duration: 12000
    });
    toast.present();
  }
}
