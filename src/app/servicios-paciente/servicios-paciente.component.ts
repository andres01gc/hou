import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../services/data.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {PopdateService} from '../popdate.service';

@Component({
  selector: 'app-servicios-paciente',
  templateUrl: './servicios-paciente.component.html',
  styleUrls: ['./servicios-paciente.component.css']
})
export class ServiciosPacienteComponent implements OnInit {
  servicios_id: any;
  servicio_finalizados: any;
  servicios_incompletos: any;
  mostrarIngreso = true;
  @Output() ingresar_servicio = new EventEmitter();
  estructura: any = {};

  constructor(public db: AngularFireDatabase, public data: DataService, public popdate: PopdateService) {
    this.traerEstructuraServicio();
    this.buscarServicios();
  }

  ngOnInit() {
  }

  buscarServicios() {
    // deberia de ser servicios activos!
    this.db.list('pacientes/' + this.data.tipo_doc_paciente_buscado + '/' +
      this.data.documento_paciente_buscado + '/servicios').valueChanges().subscribe(servicios => {
      // console.log('se encontraron servicios');
      this.servicios_id = servicios;
      // console.log(this.servicios_id);
    });
  }

  traerEstructuraServicio() {
    this.estructura = this.data.paginas_ingreso;
  }

  presionarIngresarServicio() {
    console.log('se intenta agregar un nuevo servicio a un paciente');
    this.popdate.main_view.pCard.iniciarPopUp(
      'Nuevo Servicio',
      'Servicio creado por xxxxxxx',
      this.data.paginas_servicio  ,
      null,
      true,
      (data: any): void => {
        // Esta parte no la puedo hacer general, debo saber la posición del documento y su tipo para poder crear el nuevo usuario

        // TODO buscar los datos especificos de cada input, cuando tenga las estructuras de las páginas;
        const servicio = {
          data: data,
          metadata: {
            estado: 'Activo',
            tipo_servicio: 'ni idea aún',
            nombre: 'nombre servicio',
            diagnostico: 'aquí ira la información dianogstico',
            tipo_doc: this.data.tipo_doc_paciente_buscado,
            documento: this.data.documento_paciente_buscado,
            fecha: 'insertar Fecha'
          }
        };

        console.log('se crea el nuevo servcio');
        // subo y obtengo la key de ese servicio general
        const id = this.data.db.list('servicios').push(servicio).key;
        // console.log('se sube el servicio y se obtiene la key ' + id);
        // subo el servicio al usuario,
        this.data.db.list('pacientes/' + this.data.tipo_doc_paciente_buscado + '/'
          + this.data.documento_paciente_buscado + '/servicios').push(id);

        this.buscarServicios();
        this.popdate.showToast('nuevo servicio ingresado');
      },
      (result: any): void => {
      }
    );
  }
}
