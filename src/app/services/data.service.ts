import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DataService {
  // clase enfocada a controlar toda la información.
  public showmenu = true;
  public db: AngularFireDatabase;
  public paciente_buscado: any;
  public servicio_seleccionado_paciente: any;
  public servicio_usuario_seleccionado: any;
  // sobre el usuario
  public servicios_usuario_logueado: any;
  public user: Observable<firebase.User>;
  public informacion_usuario: any;
  public current_uid: any;
  public documento_paciente_buscado: string;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  public informacion_categorias = [
    {
      titulo: 'Información Básica',
      sub_categorias:
        [
          {
            sub_titulo: 'Identidad',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Nombre'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Apellidos'
              },
              {
                tipo_item: 'input',
                type: 'date',
                tam: 'm',
                placehoder: '',
                nombre: 'Nacimiento'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 's',
                placehoder: '',
                nombre: 'Lugar'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['CC', 'TI', 'NIT', 'PPT'],
                nombre: 'Tipo_doc',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 's',
                placehoder: '',
                nombre: 'Documento'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 's',
                placehoder: '',
                nombre: 'Expedida en'
              },
              {
                tipo_item: 'line',
                tam: 'l',

              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Hombre', 'Mujer', 'Otro'],
                nombre: 'Sexo',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['O+', 'O-', 'A+', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
                nombre: 'Rh',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Blanco', 'Meztillo', 'Criollo', 'Indigena'],
                nombre: 'Raza',
                tam: 's'
              },
            ]
          },
          {
            sub_titulo: 'Contacto',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Correo electrónico'
              },
              {
                tipo_item: 'telefono',
                nombre: 'telefonos',
                tam: 'l'
              }
            ]
          },
          {
            sub_titulo: 'Información Personal',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Estrato'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
                nombre: 'Estado civil',
                tam: 's'
              }
            ]
          },
          {
            sub_titulo: 'Seguridad Social',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
                nombre: 'Plan de atención',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
                nombre: 'EPS',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
                nombre: 'Tipo de vinculación',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
                nombre: 'IPS',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
                nombre: 'Régimen',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['S', 'V', 'C', 'S', 'U'],
                nombre: 'Cooperativa',
                tam: 'm'
              }
            ]
          }
        ]
    },
    {
      titulo: 'Final',
      sub_categorias: [
        {
          sub_titulo: '',
          items: []
        }]
    }
  ];
}
