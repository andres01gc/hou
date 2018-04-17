import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DataService {
  showmenu = true;
  user: Observable<firebase.User>;
  db: AngularFireDatabase;
  paciente_buscado: any;
  servicio_seleccionado: any;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }
}
