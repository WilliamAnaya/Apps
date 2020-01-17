import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {OneSignal} from '@ionic-native/onesignal/ngx';
import {ServicesService} from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private pushService: ServicesService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      if (this.platform.is('android')) {
        this.statusBar.styleLightContent();
      }
      if (this.platform.is('ios')) {
        this.statusBar.styleDefault();
      }
      this.splashScreen.hide();
        this.pushService.configuracionInicial();
    });
  }


}
