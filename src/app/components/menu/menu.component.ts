import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {Observable} from 'rxjs';
import {Componente} from '../../interfaces/interfaces';
import {Events} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes : Observable<Componente[]>;
  public identity;
  public userData;
  constructor(
      private service : ServicesService,
      public event: Events

  ) {
    event.subscribe('user:signedIn', (userEventData) => {
      this.identity = JSON.parse(localStorage.getItem('userStorage')) ;
    });
  }

  ngOnInit() {
    this.componentes = this.service.getMenuOpt();

  }



}
