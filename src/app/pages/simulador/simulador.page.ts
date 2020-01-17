import { Component, OnInit } from '@angular/core';
import {LoadingController, MenuController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ServicesService} from '../../services/services.service';
import {of} from 'rxjs';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.page.html',
  styleUrls: ['./simulador.page.scss'],
})
export class SimuladorPage implements OnInit {
  simcyf = {
    monto: '',
    codlinea: '',
    plazocred: '',
    frecuencia: '',
    tasa: '',
    fechadesembolso: '',
    fechapcuota: '',
      codplazo: ''
  };


  public lineas;
  public plazos;
  public lineaselec;
  public tasas;
  public resultadosimulacion;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private menuCtrl: MenuController,
      private Service: ServicesService,
      private loadingCtrl: LoadingController
  ) {
  }

  ngOnInit() {
  }



  toggleMenu(){
    this.menuCtrl.toggle();
  }
  async ionViewWillEnter(){
      this.getLineas();
      this.resultadosimulacion = null;
  }

  async simular(){
      const loading = await this.loadingCtrl.create({
          message: 'Cargando...'
      });
      loading.present();
     this.Service.simular(this.simcyf).subscribe(
        response =>{
          this.resultadosimulacion = response;
            loading.dismiss();
        },
        error=>{
          console.log(<any>error);
            loading.dismiss();
        }
    );

  }

  async getLineas(){
      const loading = await this.loadingCtrl.create({
          message: 'Cargando...'
      });
      loading.present();
    this.Service.lineassim(this.simcyf).subscribe(
        response=>{
          this.lineas = response;
            loading.dismiss();
        },
        error=>{
          console.log(<any>error);
            loading.dismiss();
        }
    )
  }

  async getPlazos($even){
      const loading = await this.loadingCtrl.create({
          message: 'Cargando...'
      });
      loading.present();
        this.lineaselec = $even.target.value;
        this.simcyf.codlinea = $even.target.value;
        this.Service.plazos(this.simcyf).subscribe(
          response=>{
            this.plazos = response;
              loading.dismiss();
          },
          error=>{
            console.log(<any>error);
              loading.dismiss();
          }
        );
  }

  async getTasas(event){
      const loading = await this.loadingCtrl.create({
          message: 'Cargando...'
      });
      loading.present();
        this.simcyf.codlinea = this.lineaselec;
        this.simcyf.codplazo = event.target.value;
        this.Service.btasas(this.simcyf).subscribe(
            response=>{
              this.tasas = response;
              this.simcyf.tasa = this.tasas.plin_inte;
              loading.dismiss();
            },
            error=>{
              console.log(JSON.stringify(error));
              loading.dismiss();
            }
        );
  }

  nuevo(){
      this.resultadosimulacion = null;
  }

}
