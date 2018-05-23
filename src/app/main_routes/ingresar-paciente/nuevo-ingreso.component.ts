import {Component, ContentChildren, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {DataService} from '../../services/data.service';
import {TabComponent} from '../../tab/tab.component';
import {PaginaHistoriaComponent} from '../../pagina-historia/pagina-historia.component';
import {PgOdontogramaComponent} from '../../pg-odontograma/pg-odontograma.component';

@Component({
  selector: 'app-nuevo-ingreso',
  templateUrl: './nuevo-ingreso.component.html',
  styleUrls: ['./nuevo-ingreso.component.css']
})
export class NuevoIngresoComponent implements OnInit {
  @Output() terminado = new EventEmitter();
  @ViewChildren(PaginaHistoriaComponent) paginas: QueryList<PaginaHistoriaComponent>;
  @ViewChild(PgOdontogramaComponent) odonto: PgOdontogramaComponent;

  data_ingreso = {};

  constructor(public  data: DataService) {
    // this.traerInfoHistoria();
  }

  ngOnInit() {
  }

  traerInfoHistoria() {
    // linea para subir la información de la historia.
    // this.estructura.db.object('informacion_categorias').set(this.estructura.paginas_ingreso);
    //  this.estructura.informacion_categorias = this.estructura.paginas_ingreso;
    //   console.log('test');
    this.data.db.list('informacion_categorias').valueChanges().subscribe(item => {
      this.data.informacion_categorias = item;
    });
  }

  finalizarIngreso() {
    console.log('testing');
    //  traigo toda la información de las paginas_ingreso y la guardo en dataGuardada ingreso
    this.paginas.forEach(paginas => {
        if (paginas.titulo_pag !== 'Final') {
          this.data_ingreso[paginas.titulo_pag] = paginas.data_pag;
        }
      }
    );
    this.data_ingreso['Odontograma'] = this.odonto.data_pag;

//  creo el servicio inicial
    const servicio = {
      metadata: {
        tipo_doc: this.data_ingreso['Información General']['Identidad']['Tipo_doc'],
        documento: this.data_ingreso['Información General']['Identidad']['Documento'],
        inicio_historia: false,
      },
      estado: 'ACTIVO',
      nombre: 'Prueba de estados',
      tipo_servicio: 'periodoncia',
      diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, beatae commodi fuga incidunt odit placeat quo' +
      ' soluta vel vero voluptate. Cupiditate dolorum exercitationem maiores necessitatibus neque officiis sed sunt veritatis!',
      //  SOLO PARA NO LOGUEARSE TODO EL TIEMPO AL INICIO
      id_profesional: 'Iiw8teN0C1YRq4kIPD6Ie2epXuz2',
      id_servicio: '',
      prox_cita: 'aún no se ha asignado cita'
    };

    const dbServicio = this.data.db.list('servicios');
    servicio.id_servicio = dbServicio.push(servicio).key;

    const itemHistoriaUsuario = this.data.db.object('pacientes/' +
      this.data_ingreso['Información General']['Identidad']['Tipo_doc'] + '/' +
      this.data_ingreso['Información General']['Identidad']['Documento']);
    itemHistoriaUsuario.update({'historia': this.data_ingreso, 'servicios': [servicio]});
    this.terminado.emit(true);
  }

  asignarServicioAUsuario(servicio: any) {
    // this.dataGuardada.db.object('usuarios/' + this.dataGuardada.current_uid + '/servicios_id').update([servicio]);
  }
}


