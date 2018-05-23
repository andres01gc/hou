import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DataService {
  // clase enfocada a controlar toda la información.
  public showmenu = true;
  public db: AngularFireDatabase;
  public info_paciente_buscado: any;
  public servicio_seleccionado_paciente: any;
  public servicio_usuario_seleccionado: any;
  public user: Observable<firebase.User>;
  public informacion_usuario: any;
  public current_uid: any;
  public documento_paciente_buscado: string;
  public informacion_categorias: any = [];
  public mostrarIngresarServicio = false;
  public tipo_doc_paciente_buscado = 'CC';

  sizes: any = {
    xs: [0, 0, 0],
    s: [50, 25, 16.2],
    m: [100, 50, 33],
    l: [100, 100, 100],
    xl: [0, 0, 0]
  };
  id_servicio_seleccionado: string;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  paginas_ingreso: any[] = [
    {
      tipo_item: 'pag', nombre: 'Información General',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Identidad',
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
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['O+', 'O-', 'A+', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
                nombre: 'Rh',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Talla (cm)'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Peso (kg)'
              },

              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Blanco', 'Meztillo', 'Criollo', 'Indigena'],
                nombre: 'Raza',
                tam: 's'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Contacto',
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
            tipo_item: 'cnt', nombre: 'Información Personal',
            items: [
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Estrato'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 's',
                placehoder: '',
                nombre: 'Dirección'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Barrio'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Ciudad'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Municipio'
              }
            ]
          }
        ]
    },
    {
      tipo_item: 'pag', nombre: 'Datos Personales',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Vida profesional',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Estudiante', 'Vendedor Avon', 'Trabajador', 'Independiente'],
                nombre: 'Ocupación',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Institución'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Dirección lugar de trabajo'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
                nombre: 'Estado civil',
                tam: 's'
              },
              {
                tipo_item: 'referencia',
                nombre: 'Cónyuje',
                tam: 'l'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Datos de los padres',
            items: [
              {
                tipo_item: 'referencia',
                nombre: 'Madre ',
                tam: 'l'
              }
              ,
              {
                tipo_item: 'referencia',
                nombre: 'Padre ',
                tam: 'l'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Seguridad Social',
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
          },
          {
            tipo_item: 'cnt', nombre: 'Referencias',
            items: [
              {
                tipo_item: 'referencia',
                nombre: 'Padre ',
                tam: 'l'
              }
            ]
          }
        ]
    },
    {
      tipo_item: 'pag', nombre: 'Anamnesis',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Motivo',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Motivo de Consulta'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Historia de la enfermedad actual'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Antecedentes Sociales',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Expectativas frente al tratamiento'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Entorno socio-económico'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Hobbies'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Con quién vive y cómo es su trato con ellos'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Antecedentes médicos',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['¿Está bajo tratamiento médico?', '¿Toma medicamentos?',
                  '¿Le han aplicado anestesia dental?', '¿Fracturas?',
                  '¿Operaciones?', '¿Está en embarazo?'],
                nombre: 'Antecedentes médicos personales',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: '¿Ha tenido enfermedades o cirugías?'
              }
              ,
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Antecedentes familiares'
              }

            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Antecedentes estomatológicos u odontológicos',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Prevención', 'Operatoria', 'Periodoncia', 'Endodoncia', 'Prótesis', 'Ortodoncia', 'Ortopedia', 'Cirugía Oral'],
                nombre: 'Tratamientos previos',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'date',
                tam: 'm',
                placehoder: '',
                nombre: 'Fecha de la última visita'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Motivo de la última visita'
              },
              {
                tipo_item: 'multiple',
                opciones: ['Reacción desfavorable'],
                nombre: 'tipo de reacción',
                tam: 'm'
              },
              {
                tipo_item: 'multiple',
                opciones: ['Anestésico Local', 'Penicilina o antibióticos', 'Otros medicamentos', 'Comidas'],
                nombre: 'Reacciones alérgicas a',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }

            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Hábitos',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Rechina los dientes (bruxismo)', 'Succión digital', 'Comerse las uñas', 'Respirar por la boca', 'Apretar los dientes', 'Cigarrillo', 'Licor', 'Café', 'Drogas'],
                nombre: 'Situaciones',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Otros hábitos'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Hábitos de higiene oral',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['3 veces al día', 'Diario', 'Una vez cada 2 días', 'Cuando me acuerdo'],
                nombre: '¿Cada cuanto se cepilla?',
                tam: 'm'
              },
              {
                tipo_item: 'multiple',
                opciones: [' seda dental', 'enjuague bucal'],
                nombre: 'Usa',
                tam: 'm'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['2 a 3', '3 a 5', '5 a 7', 'más de 7'],
                nombre: '¿Cada cuánto cambia el cepillo? (En meses)',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['No', 'Total', 'Removible', 'Fija'],
                nombre: '¿Usa prótesis dental?',
                tam: 'm'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Otros'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          }
        ]
    },
    {
      tipo_item: 'pag', nombre: 'Revisión por sistemas',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Sistema nervioso',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Ansiedad', 'Irritabilidad', 'Sincopes', 'Convulsiones', 'Paresias', 'Cefaleas', 'Depresión', 'Lipotimias', 'Epilepsia', 'Neuralgias', 'Parálisis', 'Migraña', 'Accidente cerebro vascular'],
                nombre: 'ss',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Sistema Respiratorio',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Tos', 'Hemoptisis', 'Disnea', 'Asma', 'Rinitis', 'TBC', 'Pulmonares', 'Micosis'],
                nombre: 'ss',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Sistema Cardiovascular',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Arritmias', 'Cianosis', 'Anasarca', 'HTA', 'Cardiopatías congénitas', 'Varices'],
                nombre: 'sssa',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Sistema Gastrointestinal',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Diarrea', 'Gastritis', 'Hepatitis', 'Amibiasis', 'Ulceras Ictericia'],
                nombre: 'vasd',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Sistema Endocrino',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Enanismo', 'Gigantismo', 'Acromegalia', 'Cretinismo', 'Diabetes'],
                nombre: 'ge',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Sistema Osteoarticular',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Artritis', 'Artrosis', 'Espasmos', 'Dolores Articulares', 'Tics'],
                nombre: 'asdv',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Piel y Anexos',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Erupciones cutáneas', 'Psoriasis', 'Micosis'],
                nombre: 'avsd',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Comentarios',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'vew'
              }
            ]
          }

        ]
    },
    {
      tipo_item: 'pag', nombre: 'Examen físico',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'General',
            items: [
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Talla (cm)'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Peso (kg)'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Temperatura (°C)'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Tensión Arterial'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Frecuencia respiratoria'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Blanco', 'Indio', 'Mulato', 'Meztillo', 'Criollo', 'Indigena'],
                nombre: 'Etnia',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Ectomorfo', 'Mesomorfo', 'Endomorfo'],
                nombre: 'Contextura',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Órganos de los sentidos'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Orientación en el tiempo y espacio'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Apariencia nutricional',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Estable', 'Acelerado', 'Decreciente'],
                nombre: 'Picos de crecimiento',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Similar', 'Aumentado', 'Disminuido'],
                nombre: 'Crecimiento comparado',
                tam: 'm'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Ojos',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Ptergios', 'Exoftalmos', 'Ptosis', 'Estrabismo', 'Hipertelorismo'],
                nombre: 'Vev',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Descripción'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Nariz y senos paranasales',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Pequeño', 'Mediano', 'Grande'],
                nombre: 'Tamaño',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Recta', 'Convexa', 'Cóncava'],
                nombre: 'Contorno',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Amplias', 'Estrechas'],
                nombre: 'Narinas',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Desviado izq', 'Desviado der'],
                nombre: 'Tabique',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Hipertrífico izq', 'Hipertrófico der'],
                nombre: 'Cornetes',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Descripción'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Oídos',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Forma',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Normal'],
                nombre: 'Localización',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Descripción'
              }
            ]
          }
        ]
    },
    {
      tipo_item: 'pag', nombre: 'Examen estomatológico',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Extraoral',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Cóncavo', 'Convexo', 'Recto', 'Asimétrico'],
                nombre: 'Tipo de perfil',
                tam: 'm'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'ATM (articulación temporomandibular)'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Región submandibular'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Cuello'
              }, {
                tipo_item: 'line',
                tam: 'l',
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Normal'],
                nombre: 'Labio superior, selección',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Funcional', 'Corto', 'Hiperfuncional', 'Hipofuncional'],
                nombre: 'Labio superior, funcionalidad',
                tam: 'm'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Comentarios'
              }, {
                tipo_item: 'line',
                tam: 'l',
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Normal'],
                nombre: 'Labio Inferior, selección',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Funcional', 'Corto', 'Hiperfuncional', 'Hipofuncional'],
                nombre: 'Labio Inferior, funcionalidad',
                tam: 'm'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Comentarios'
              }, {
                tipo_item: 'line',
                tam: 'l',
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Hipotónico', 'Hipertónico', 'Normotónico'],
                nombre: 'Tonalidad',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Competencia', 'Incompetencia'],
                nombre: 'Selle labial',
                tam: 'm'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Intraoral',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Vestíbulo'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Bucas-Carrillos'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Rebordes Alveolares'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Piso de boca'
              }, {
                tipo_item: 'line',
                tam: 'l',
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Alto', 'Medio', 'Bajo'],
                nombre: 'Paladar duro, profundidad',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Paladar duro, color',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Estrecho'],
                nombre: 'Paladar duro, Ancho',
                tam: 'm'
              },
              {
                tipo_item: 'multiple',
                opciones: ['Torus'],
                nombre: 'vsad',
                tam: 's'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Rugas'
              }, {
                tipo_item: 'line',
                tam: 'l',
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Paladar blando, tipo',
                tam: 'm'
              }, {
                tipo_item: 'multiple',
                opciones: ['Submucoso', 'Úvula bífida'],
                nombre: 'wADVB',
                tam: 'm'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normales', 'Hipertróficas', 'Ausentes'],
                nombre: 'Amígdalas',
                tam: 'm'
              }, {
                tipo_item: 'line',
                tam: 'l',
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Grande', 'Pequeño'],
                nombre: 'Lengua, tamaño',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Lengua, movilidad',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Protuída'],
                nombre: 'Lengua, Posición',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Lengua, Frenillo',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Lengua, Función gustativa',
                tam: 's'
              }

            ]
          }, {
          tipo_item: 'cnt', nombre: 'Intraoral pt 2',
          items: [
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Forma de arcada superior'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Forma de arcada inferior'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Tipo de arco superior'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Tipo de arco inferior'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación entre caninos permanentes derechos'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación entre caninos permanentes izquierdos'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación entre caninos Deciduos derechos'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación entre caninos Deciduos izquierdos'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación sagital de dientes 2do Morales deciduos superior derechos'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación sagital de dientes 2do Morales deciduos superior izquierdos'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación sagital de dientes 2do Morales deciduos inferior derechos'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación sagital de dientes 2do Morales deciduos inferior izquierdos'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'select',
              type: 'text',
              opciones: ['Colapsado', 'No Colapsado', 'Exostosis'],
              nombre: 'Zonas edéntulas, Altura',
              tam: 'm'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Observaciones'
            }

          ]
        }
        ]
    },
    {
      tipo_item: 'pag', nombre: 'Examen Periodontal',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Estado',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Sano'],
                nombre: '¿es?',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal', 'Pigmentaciones'],
                nombre: 'Color',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['No', 'Marginal', 'Papilar', 'Difusa'],
                nombre: 'Gingivitis',
                tam: 'm'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['No', 'Leve', 'Moderada', 'Avanzada', 'Localizada', 'Generalizada'],
                nombre: 'Periodontitis',
                tam: 'm'
              }, {
                tipo_item: 'multiple',
                opciones: ['Forma', 'Tamaño', 'Consistencia',
                  'Textura', 'Sangrado espontáneo',
                  'Sangrado al estímulo', 'Exudad',
                  'Movilidad dental', 'Absceso', 'Fístula', 'Cálculos'],
                nombre: 'Signos clínicos',
                tam: 'l'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          }, {
          tipo_item: 'cnt', nombre: 'Descripción radiográfica',
          items: [
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'l',
              placehoder: '',
              nombre: 'Panorámica'
            },
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'l',
              placehoder: '',
              nombre: 'Periapicales'
            },
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'l',
              placehoder: '',
              nombre: 'Tomografía'
            },
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'l',
              placehoder: '',
              nombre: 'Otras'
            }
          ]
        }
        ]
    }, {
      tipo_item: 'pag', nombre: 'Diagnósticos',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Diagnóstico general',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['01: Confirmado nuevo', '02: Confirmado repetido', '03: Descripción diagnóstica',
                  '04: Presuntivo', '05: Definitivo', '06: Otro'],
                nombre: 'Código de diagnóstico',
                tam: 'm'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['General', 'Dental', 'Periodontal', 'Oclusal', 'Pulpar', 'Muscular',
                  'Articular', 'Sistémico', 'Esquelético', 'Tejidos blandos', 'Funcional', 'Otro'],
                nombre: 'Tipo de diagnóstico',
                tam: 'm'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Ayuda diagnóstica'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Descripción'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Pronóstico'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Plan de tratamiento inicial'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Comentarios examinador'
              }
            ]
          }, {
          tipo_item: 'cnt', nombre: 'Diagnóstico por diente',
          items: [
            {
              tipo_item: 'input',
              type: 'number',
              tam: 'm',
              placehoder: '',
              nombre: 'Número de diente'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Diagnóstico'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Pronóstico Periodontal'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Pronóstico endodóntico'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Pronóstico prostodóntico'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Conducta a seguir'
            }
          ]
        }
        ]
    }, {
      tipo_item: 'pag', nombre: 'Johnny Test',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Identidad',
            items: [
              {
                tipo_item: 'enfermedad',
                nombre: 'Enfermedades',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Conducta a seguir'
              }
            ]
          }
        ]
    }
  ];
  paginas_historia: any[] = [
    {
      tipo_item: 'pag', nombre: 'Información General',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Identidad',
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
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['O+', 'O-', 'A+', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
                nombre: 'Rh',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Talla (cm)'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Peso (kg)'
              },

              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Blanco', 'Meztillo', 'Criollo', 'Indigena'],
                nombre: 'Raza',
                tam: 's'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Contacto',
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
            tipo_item: 'cnt', nombre: 'Pagína 2, y bla bla bla bla bla',
            items: [
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Estrato'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 's',
                placehoder: '',
                nombre: 'Dirección'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Barrio'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Ciudad'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Municipio'
              }
            ]
          }
        ]
    },
    {
      tipo_item: 'pag', nombre: 'Datos Personales',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Vida profesional',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Estudiante', 'Vendedor Avon', 'Trabajador', 'Independiente'],
                nombre: 'Ocupación',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Institución'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Dirección lugar de trabajo'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Solter@', 'Viud@', 'Casad@', 'Separad@', 'Unión libre'],
                nombre: 'Estado civil',
                tam: 's'
              },
              {
                tipo_item: 'referencia',
                nombre: 'Cónyuje',
                tam: 'l'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Datos de los padres',
            items: [
              {
                tipo_item: 'referencia',
                nombre: 'Madre ',
                tam: 'l'
              }
              ,
              {
                tipo_item: 'referencia',
                nombre: 'Padre ',
                tam: 'l'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Seguridad Social',
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
          },
          {
            tipo_item: 'cnt', nombre: 'Referencias',
            items: [
              {
                tipo_item: 'referencia',
                nombre: 'Padre ',
                tam: 'l'
              }
            ]
          }
        ]
    },
    {
      tipo_item: 'pag', nombre: 'Anamnesis',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Motivo',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Motivo de Consulta'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Historia de la enfermedad actual'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Antecedentes Sociales',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Expectativas frente al tratamiento'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Entorno socio-económico'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Hobbies'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Con quién vive y cómo es su trato con ellos'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Antecedentes médicos',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['¿Está bajo tratamiento médico?', '¿Toma medicamentos?',
                  '¿Le han aplicado anestesia dental?', '¿Fracturas?',
                  '¿Operaciones?', '¿Está en embarazo?'],
                nombre: 'Antecedentes médicos personales',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: '¿Ha tenido enfermedades o cirugías?'
              }
              ,
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Antecedentes familiares'
              }

            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Antecedentes estomatológicos u odontológicos',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Prevención', 'Operatoria', 'Periodoncia', 'Endodoncia', 'Prótesis', 'Ortodoncia', 'Ortopedia', 'Cirugía Oral'],
                nombre: 'Tratamientos previos',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'date',
                tam: 'm',
                placehoder: '',
                nombre: 'Fecha de la última visita'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Motivo de la última visita'
              },
              {
                tipo_item: 'multiple',
                opciones: ['Reacción desfavorable'],
                nombre: 'tipo de reacción',
                tam: 'm'
              },
              {
                tipo_item: 'multiple',
                opciones: ['Anestésico Local', 'Penicilina o antibióticos', 'Otros medicamentos', 'Comidas'],
                nombre: 'Reacciones alérgicas a',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }

            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Hábitos',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Rechina los dientes (bruxismo)', 'Succión digital', 'Comerse las uñas', 'Respirar por la boca', 'Apretar los dientes', 'Cigarrillo', 'Licor', 'Café', 'Drogas'],
                nombre: 'Situaciones',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Otros hábitos'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Hábitos de higiene oral',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['3 veces al día', 'Diario', 'Una vez cada 2 días', 'Cuando me acuerdo'],
                nombre: '¿Cada cuanto se cepilla?',
                tam: 'm'
              },
              {
                tipo_item: 'multiple',
                opciones: [' seda dental', 'enjuague bucal'],
                nombre: 'Usa',
                tam: 'm'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['2 a 3', '3 a 5', '5 a 7', 'más de 7'],
                nombre: '¿Cada cuánto cambia el cepillo? (En meses)',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['No', 'Total', 'Removible', 'Fija'],
                nombre: '¿Usa prótesis dental?',
                tam: 'm'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Otros'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          }
        ]
    },
    {
      tipo_item: 'pag', nombre: 'Revisión por sistemas',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Sistema nervioso',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Ansiedad', 'Irritabilidad', 'Sincopes', 'Convulsiones', 'Paresias', 'Cefaleas', 'Depresión', 'Lipotimias', 'Epilepsia', 'Neuralgias', 'Parálisis', 'Migraña', 'Accidente cerebro vascular'],
                nombre: 'ss',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Sistema Respiratorio',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Tos', 'Hemoptisis', 'Disnea', 'Asma', 'Rinitis', 'TBC', 'Pulmonares', 'Micosis'],
                nombre: 'ss',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Sistema Cardiovascular',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Arritmias', 'Cianosis', 'Anasarca', 'HTA', 'Cardiopatías congénitas', 'Varices'],
                nombre: 'sssa',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Sistema Gastrointestinal',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Diarrea', 'Gastritis', 'Hepatitis', 'Amibiasis', 'Ulceras Ictericia'],
                nombre: 'vasd',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Sistema Endocrino',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Enanismo', 'Gigantismo', 'Acromegalia', 'Cretinismo', 'Diabetes'],
                nombre: 'ge',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Sistema Osteoarticular',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Artritis', 'Artrosis', 'Espasmos', 'Dolores Articulares', 'Tics'],
                nombre: 'asdv',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Piel y Anexos',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Erupciones cutáneas', 'Psoriasis', 'Micosis'],
                nombre: 'avsd',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Comentarios',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'vew'
              }
            ]
          }

        ]
    },
    {
      tipo_item: 'pag', nombre: 'Examen físico',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'General',
            items: [
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Talla (cm)'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Peso (kg)'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Temperatura (°C)'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Tensión Arterial'
              },
              {
                tipo_item: 'input',
                type: 'number',
                tam: 's',
                placehoder: '',
                nombre: 'Frecuencia respiratoria'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Blanco', 'Indio', 'Mulato', 'Meztillo', 'Criollo', 'Indigena'],
                nombre: 'Etnia',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Ectomorfo', 'Mesomorfo', 'Endomorfo'],
                nombre: 'Contextura',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Órganos de los sentidos'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Orientación en el tiempo y espacio'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Apariencia nutricional',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Estable', 'Acelerado', 'Decreciente'],
                nombre: 'Picos de crecimiento',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Similar', 'Aumentado', 'Disminuido'],
                nombre: 'Crecimiento comparado',
                tam: 'm'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Ojos',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Ptergios', 'Exoftalmos', 'Ptosis', 'Estrabismo', 'Hipertelorismo'],
                nombre: 'Vev',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Descripción'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Nariz y senos paranasales',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Pequeño', 'Mediano', 'Grande'],
                nombre: 'Tamaño',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Recta', 'Convexa', 'Cóncava'],
                nombre: 'Contorno',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Amplias', 'Estrechas'],
                nombre: 'Narinas',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Desviado izq', 'Desviado der'],
                nombre: 'Tabique',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Hipertrífico izq', 'Hipertrófico der'],
                nombre: 'Cornetes',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Descripción'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Oídos',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Forma',
                tam: 's'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Normal'],
                nombre: 'Localización',
                tam: 's'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Descripción'
              }
            ]
          }
        ]
    },
    {
      tipo_item: 'pag', nombre: 'Examen estomatológico',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Extraoral',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Cóncavo', 'Convexo', 'Recto', 'Asimétrico'],
                nombre: 'Tipo de perfil',
                tam: 'm'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'ATM (articulación temporomandibular)'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Región submandibular'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Cuello'
              }, {
                tipo_item: 'line',
                tam: 'l',
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Normal'],
                nombre: 'Labio superior, selección',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Funcional', 'Corto', 'Hiperfuncional', 'Hipofuncional'],
                nombre: 'Labio superior, funcionalidad',
                tam: 'm'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Comentarios'
              }, {
                tipo_item: 'line',
                tam: 'l',
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Normal'],
                nombre: 'Labio Inferior, selección',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Funcional', 'Corto', 'Hiperfuncional', 'Hipofuncional'],
                nombre: 'Labio Inferior, funcionalidad',
                tam: 'm'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Comentarios'
              }, {
                tipo_item: 'line',
                tam: 'l',
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Hipotónico', 'Hipertónico', 'Normotónico'],
                nombre: 'Tonalidad',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Competencia', 'Incompetencia'],
                nombre: 'Selle labial',
                tam: 'm'
              }
            ]
          },
          {
            tipo_item: 'cnt', nombre: 'Intraoral',
            items: [
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Vestíbulo'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Bucas-Carrillos'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Rebordes Alveolares'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Piso de boca'
              }, {
                tipo_item: 'line',
                tam: 'l',
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Alto', 'Medio', 'Bajo'],
                nombre: 'Paladar duro, profundidad',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Paladar duro, color',
                tam: 'm'
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Estrecho'],
                nombre: 'Paladar duro, Ancho',
                tam: 'm'
              },
              {
                tipo_item: 'multiple',
                opciones: ['Torus'],
                nombre: 'vsad',
                tam: 's'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Rugas'
              }, {
                tipo_item: 'line',
                tam: 'l',
              },
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Paladar blando, tipo',
                tam: 'm'
              }, {
                tipo_item: 'multiple',
                opciones: ['Submucoso', 'Úvula bífida'],
                nombre: 'wADVB',
                tam: 'm'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normales', 'Hipertróficas', 'Ausentes'],
                nombre: 'Amígdalas',
                tam: 'm'
              }, {
                tipo_item: 'line',
                tam: 'l',
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Grande', 'Pequeño'],
                nombre: 'Lengua, tamaño',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Lengua, movilidad',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Protuída'],
                nombre: 'Lengua, Posición',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Lengua, Frenillo',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal'],
                nombre: 'Lengua, Función gustativa',
                tam: 's'
              }

            ]
          }, {
          tipo_item: 'cnt', nombre: 'Intraoral pt 2',
          items: [
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Forma de arcada superior'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Forma de arcada inferior'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Tipo de arco superior'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Tipo de arco inferior'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación entre caninos permanentes derechos'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación entre caninos permanentes izquierdos'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación entre caninos Deciduos derechos'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación entre caninos Deciduos izquierdos'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación sagital de dientes 2do Morales deciduos superior derechos'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación sagital de dientes 2do Morales deciduos superior izquierdos'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación sagital de dientes 2do Morales deciduos inferior derechos'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Relación sagital de dientes 2do Morales deciduos inferior izquierdos'
            }, {
              tipo_item: 'line',
              tam: 'l',
            }, {
              tipo_item: 'select',
              type: 'text',
              opciones: ['Colapsado', 'No Colapsado', 'Exostosis'],
              nombre: 'Zonas edéntulas, Altura',
              tam: 'm'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Observaciones'
            }

          ]
        }
        ]
    },
    {
      tipo_item: 'pag', nombre: 'Examen Periodontal',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Estado',
            items: [
              {
                tipo_item: 'multiple',
                opciones: ['Sano'],
                nombre: '¿es?',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['Normal', 'Anormal', 'Pigmentaciones'],
                nombre: 'Color',
                tam: 's'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['No', 'Marginal', 'Papilar', 'Difusa'],
                nombre: 'Gingivitis',
                tam: 'm'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['No', 'Leve', 'Moderada', 'Avanzada', 'Localizada', 'Generalizada'],
                nombre: 'Periodontitis',
                tam: 'm'
              }, {
                tipo_item: 'multiple',
                opciones: ['Forma', 'Tamaño', 'Consistencia',
                  'Textura', 'Sangrado espontáneo',
                  'Sangrado al estímulo', 'Exudad',
                  'Movilidad dental', 'Absceso', 'Fístula', 'Cálculos'],
                nombre: 'Signos clínicos',
                tam: 'l'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Observaciones'
              }
            ]
          }, {
          tipo_item: 'cnt', nombre: 'Descripción radiográfica',
          items: [
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'l',
              placehoder: '',
              nombre: 'Panorámica'
            },
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'l',
              placehoder: '',
              nombre: 'Periapicales'
            },
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'l',
              placehoder: '',
              nombre: 'Tomografía'
            },
            {
              tipo_item: 'input',
              type: 'text',
              tam: 'l',
              placehoder: '',
              nombre: 'Otras'
            }
          ]
        }
        ]
    }, {
      tipo_item: 'pag', nombre: 'Diagnósticos',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Diagnóstico general',
            items: [
              {
                tipo_item: 'select',
                type: 'text',
                opciones: ['01: Confirmado nuevo', '02: Confirmado repetido', '03: Descripción diagnóstica',
                  '04: Presuntivo', '05: Definitivo', '06: Otro'],
                nombre: 'Código de diagnóstico',
                tam: 'm'
              }, {
                tipo_item: 'select',
                type: 'text',
                opciones: ['General', 'Dental', 'Periodontal', 'Oclusal', 'Pulpar', 'Muscular',
                  'Articular', 'Sistémico', 'Esquelético', 'Tejidos blandos', 'Funcional', 'Otro'],
                nombre: 'Tipo de diagnóstico',
                tam: 'm'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Ayuda diagnóstica'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Descripción'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Pronóstico'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Plan de tratamiento inicial'
              }, {
                tipo_item: 'input',
                type: 'text',
                tam: 'l',
                placehoder: '',
                nombre: 'Comentarios examinador'
              }
            ]
          }, {
          tipo_item: 'cnt', nombre: 'Diagnóstico por diente',
          items: [
            {
              tipo_item: 'input',
              type: 'number',
              tam: 'm',
              placehoder: '',
              nombre: 'Número de diente'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Diagnóstico'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Pronóstico Periodontal'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Pronóstico endodóntico'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Pronóstico prostodóntico'
            }, {
              tipo_item: 'input',
              type: 'text',
              tam: 'm',
              placehoder: '',
              nombre: 'Conducta a seguir'
            }
          ]
        }
        ]
    }, {
      tipo_item: 'pag', nombre: 'Johnny Test',
      items:
        [
          {
            tipo_item: 'cnt', nombre: 'Identidad',
            items: [
              {
                tipo_item: 'enfermedad',
                nombre: 'Enfermedades',
                tam: 'l'
              },
              {
                tipo_item: 'input',
                type: 'text',
                tam: 'm',
                placehoder: '',
                nombre: 'Conducta a seguir'
              }
            ]
          }
        ]
    }
  ];
  paginas_tratamiento: any[] = this.paginas_ingreso;
  paginas_servicio: any[] = this.paginas_historia;

  paginas_anexos: any[] = [
    {nombre: 'Nuevo anexo', estructura: this.paginas_historia},
    {nombre: 'anexo 2', estructura: this.paginas_historia},
    {nombre: 'anexo 3', estructura: this.paginas_historia},
    {nombre: 'anexo 4', estructura: this.paginas_historia},
    {nombre: 'anexo 5', estructura: this.paginas_historia},
  ];


}


