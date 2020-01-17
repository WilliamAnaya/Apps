import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {GLOBAL} from './global';
import {Observable} from 'rxjs';
import {Componente} from '../interfaces/interfaces';
import {OneSignal, OSNotification, OSNotificationPayload} from '@ionic-native/onesignal/ngx';
import {not} from 'rxjs/internal-compatibility';
import {Storage} from '@ionic/storage';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public url: string;
  public identity;
  public token;
  public userId;

  public mensajes:OSNotificationPayload[] = [];

  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(
      private http: HttpClient,
      private oneSignal: OneSignal,
      private storage: Storage,
      public platform: Platform
  ) {
    this.url = GLOBAL.url;
    this.cargarMensajes();
  }
  async getMensajes(){
    await this.cargarMensajes();
    return [...this.mensajes]
  }

  login(user, getToken): Observable<any> {
    user.getToken = getToken;
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url + 'login/1', params, {headers});
  }
  reset(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url + 'reset/1', params, {headers});
  }
  contactenos(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url + 'contacto/1', params, {headers});
  }
  enviarConsultadeCredito(datos): Observable<any> {
    let json = JSON.stringify(datos);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url + 'consultaCredito/1', params, {headers});
  }
  enviarSolicitudServicios(datos): Observable<any> {
    let json = JSON.stringify(datos);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url + 'solservicios/1', params, {headers});
  }
  enviarSolicitudRotativo(datos): Observable<any> {
        let json = JSON.stringify(datos);
        let params = 'json=' + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.url + 'solcrotativo/1', params, {headers});
  }
  consultarrotativo(datos): Observable<any> {
        let json = JSON.stringify(datos);
        let params = 'json=' + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.url + 'consultarrotativo/1', params, {headers});
  }

  solicitardesembolso(datos): Observable<any> {
        let json = JSON.stringify(datos);
        let params = 'json=' + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.url + 'solicitardesembolso/1', params, {headers});
  }


    aportes(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'aportes/1', params, {headers});
  }
  ahorros(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'ahorros/1', params, {headers});
  }
  servicios(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'servicios/1', params, {headers});
  }
  cartera(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'cartera/1', params, {headers});
  }
  mvtocartera(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'mvtocartera/1', params, {headers});
  }
  planpagos(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'plandepagos/1', params, {headers});
  }

  pagosfaltantes(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'pagosfuturos/1', params, {headers});
  }

  simulador(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'simulador/1', params, {headers});
  }

  lineassim(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'lineas/1', params, {headers});
  }

  plazos(user): Observable<any> {
    console.log(user);
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'plazos/1', params, {headers});
  }

  noticias(): Observable<any> {
    let params = null;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'noticias/1', params, {headers});
  }

  btasas(user): Observable<any> {
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'tasas/1', params, {headers});
  }

  simular(param): Observable<any> {
    let json = JSON.stringify(param);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'simular/1', params, {headers});
  }

  getMenuOpt() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
    /*let params = null;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<Componente[]>(this.url+'menu/1', params, {headers});*/
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity!="undefined"){
      this.identity = identity;
    }else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token!="undefined"){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

  configuracionInicial() {
    if (this.platform.is('android')) {
      this.oneSignal.startInit('a7fd1478-1263-4eb0-bd22-50b90a879aab', '243830015798');
    }
    if (this.platform.is('ios')) {
      this.oneSignal.startInit('a7fd1478-1263-4eb0-bd22-50b90a879aab');
    }

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      // do something when notification is received
      console.log('Notificacion recibida', noti);
      this.notificacionRecibida(noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);
      await this.notificacionRecibida(noti.notification)
    });

    this.oneSignal.registerForPushNotifications();

    this.oneSignal.endInit();

    this.oneSignal.getIds().then( info =>{
      this.userId = info.userId;
    });

  }



  getNotificationId (user): Observable<any>{
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'insertidnotificaciones/1', params, {headers});
  }
  getnotificaciones (): Observable<any>{
    let params = null;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this.http.post(this.url+'obtenernotificaciones/1', params, {headers});
  }

  async notificacionRecibida(noti: OSNotification){
    await this.cargarMensajes();
    const payload = noti.payload;
    const existePush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);
    if(existePush){
      return
    }
    this.mensajes.unshift(payload);
    this.pushListener.emit(payload);
    await this.guardarmensajes();
  }

  guardarmensajes(){
    this.storage.set('mensajes', this.mensajes);
  }
  async cargarMensajes(){
    this.mensajes = await this.storage.get('mensajes') || [];
    return this.mensajes;
  }






}
