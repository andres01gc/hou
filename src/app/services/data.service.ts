import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DataService {
  showmenu = true;
  user: Observable<firebase.User>;
  houUser: { email; nombres: any | string; apellidos: any | string; sexo: any | string; especialidad: any | string };
  db: AngularFireDatabase;
  paciente_buscado: any;
  constructor(db: AngularFireDatabase) {
    this.db = db;
  }
}
