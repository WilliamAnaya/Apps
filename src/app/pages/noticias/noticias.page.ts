import {Component, Input, OnInit} from '@angular/core';
import {LoadingController, MenuController} from '@ionic/angular';
import {identity} from 'rxjs';
import {ServicesService} from '../../services/services.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  public identity;
  public noticias;
  @Input() mensaje;
  constructor(
      private menuCtrl: MenuController,
      private Service: ServicesService,
      private loadinctrl : LoadingController
  ) {

  }

  ngOnInit() {

  }

  async ionViewWillEnter(){
      await this.obtenerNoticias();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
    this.identity = localStorage.getItem('identity');
    this.mensaje = this.identity;
  }

  async obtenerNoticias(){
      const loading = await this.loadinctrl.create({
          message: 'Cargando...'
      });
      loading.present();
      this.Service.noticias().subscribe(
          response =>{
            this.noticias = response;
              loading.dismiss();
          },error=>{
            console.log(<any>error);
              loading.dismiss();
          }
      )

  }

}
