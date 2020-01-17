import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-solcre',
  templateUrl: './solcre.page.html',
  styleUrls: ['./solcre.page.scss'],
})
export class SolcrePage implements OnInit {
  solcre = {
    monto: '',
    telefono: '',
    celular: '',
    name: '',
    surname: '',
    usuario: '',
    email: '',
    pagare: ''
  };
  identity;
  existerotativo;
  noexisterotativo;

  constructor(
      private Service: ServicesService,
      public toast: ToastController,
      public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.identity = JSON.parse(localStorage.getItem('identity'));
    this.consultarrotativo();
  }

  onSubmit(){
    this.solcre.usuario = this.identity.usuario;
    this.solcre.name = this.identity.name;
    this.solcre.surname = this.identity.surname;
    this.solcre.email = this.identity.email;
    this.solcre.telefono = this.identity.email;

    this.Service.enviarSolicitudRotativo(this.solcre).subscribe(
        response=>{

          this.presentToast(response.message)
        },error=>{
          console.log(<any>error)
        }
    );

  }

    async solcitardesembolso(){
        this.solcre.usuario = this.identity.usuario;
        this.solcre.name = this.identity.name;
        this.solcre.surname = this.identity.surname;
        this.solcre.pagare = this.existerotativo.numpagare;
        const loading = await this.loadingController.create();
        await loading.present();
        await this.Service.solicitardesembolso(this.solcre).subscribe(
            response=>{
                this.presentToast(response.message)
            },error=>{
                console.log(<any>error)
            }
        );
        loading.dismiss();
    }

  async presentToast(message) {
    const toast = await this.toast.create({
      message,
      position: 'middle',
      duration: 12000
    });
    toast.present();
  }

  consultarrotativo(){
      this.Service.consultarrotativo(this.identity).subscribe(
          response => {
              if(response.status=='ok'){
                  this.existerotativo = response;
              }else{
                  this.noexisterotativo = response;
              }
          }, error1 => {
              console.log(error1);
          }
      )
  }

}
