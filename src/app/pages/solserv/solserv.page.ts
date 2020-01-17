import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-solserv',
  templateUrl: './solserv.page.html',
  styleUrls: ['./solserv.page.scss'],
})
export class SolservPage implements OnInit {
  servicios = {
    servicio: '',
    valor: '',
    porcentaje: '',
    telefono: '',
    celular: '',
    name: '',
    surname: '',
    usuario: '',
    email: '',
  };
  servicioselected;
  porcentaje = null;
  valor = null;

  public identity;
  constructor(
      private Service: ServicesService,
      public toast: ToastController,
  ) { }

  ngOnInit() {
    this.identity = JSON.parse(localStorage.getItem('identity'));
  }

  onSubmit(){
    this.servicios.usuario = this.identity.usuario;
    this.servicios.name = this.identity.name;
    this.servicios.surname = this.identity.surname;
    this.servicios.email = this.identity.email;

    this.Service.enviarSolicitudServicios(this.servicios).subscribe(
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

  getOption($even){
    this.servicioselected = $even.target.value;
    if(this.servicioselected==1){
      this.porcentaje = 1;
      this.valor = null;
    }else {
      this.valor = 1;
      this.porcentaje = null;
    }

  }

}
