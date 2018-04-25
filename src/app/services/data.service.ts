import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DataService {
  showmenu = true;
  db: AngularFireDatabase;
  paciente_buscado: any;
  servicio_seleccionado: any;
  servicio_usuario_seleccionado: any;
  // sobre el usuario
  servicios_usuario_logueado: any;
  user: Observable<firebase.User>;
  info_usuario_logueado: any;
  current_uid: any;
  documento_paciente_buscado: string;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }
}
