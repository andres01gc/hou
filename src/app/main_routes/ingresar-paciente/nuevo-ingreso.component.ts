import {Component, ContentChildren, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {DataService} from '../../services/data.service';
import {TabComponent} from '../../tab/tab.component';
import {PaginaHistoriaComponent} from '../../pagina-historia/pagina-historia.component';

@Component({
  selector: 'app-nuevo-ingreso',
  templateUrl: './nuevo-ingreso.component.html',
  styleUrls: ['./nuevo-ingreso.component.css']
})
export class NuevoIngresoComponent implements OnInit {
  @Output() terminado = new EventEmitter();
  @ViewChildren(PaginaHistoriaComponent) paginas: QueryList<PaginaHistoriaComponent>;
  data_ingreso = {};

  constructor(public  data: DataService) {
    // this.obternerInformacionBaseHistoria();
  }

  ngOnInit() {
  }

  finalizarIngreso() {
    this.paginas.forEach(paginas => {
        if (paginas.titulo_pag !== 'Final') {
          this.data_ingreso[paginas.titulo_pag] = paginas.data_pag;
        }
      }
    );
    console.log(this.data_ingreso);
    // subo el servicio general
    // const dbServicio = this.sub_categorias.db.list('servicios');
    // const keyServicio = dbServicio.push(servicio).key;
    //  se guarda los datos en la historia clínica inicial.
    const itemHistoriaUsuario = this.data.db.object('pacientes/CC/123456/historia');
    itemHistoriaUsuario.update(this.data_ingreso);
    this.terminado.emit(true);
  }

  asignarServicioAUsuario(servicio: any) {
    this.data.db.object('usuarios/' + this.data.current_uid + '/servicios_activos').update([servicio]);
  }


  crearServicio() {
    // creo el servicio
    // var servicio = {
    //   metadata: {
    //     tipo_doc: this.basicComponent.sub_categorias.identidad.tipo_documento,
    //     documento: this.basicComponent.sub_categorias.identidad.documento,
    //     inicio_historia: false,
    //   },
    //   estado: 'ACTIVO',
    //   nombre: 'Prueba de estados',
    //   tipo_servicio: 'periodoncia',
    //   diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, beatae commodi fuga incidunt odit placeat quo' +
    //   ' soluta vel vero voluptate. Cupiditate dolorum exercitationem maiores necessitatibus neque officiis sed sunt veritatis!',
    //   // evoluciones: [{fecha: '', contenido: ''}],
    //   id_paciente: this.sub_categorias.current_uid,
    //   id: '',
    //   prox_cita: 'aún no se ha asignado cita'
    // };
  }

}

