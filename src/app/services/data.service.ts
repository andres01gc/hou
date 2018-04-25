import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DataService {
  public showmenu = true;
  public db: AngularFireDatabase;
  public paciente_buscado: any;
  public servicio_seleccionado: any;
  public servicio_usuario_seleccionado: any;
  // sobre el usuario
  public servicios_usuario_logueado: any;
  public user: Observable<firebase.User>;
  public info_usuario_logueado: any;
  public current_uid: any;
  public documento_paciente_buscado: string;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }
}
