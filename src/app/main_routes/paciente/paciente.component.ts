import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  mostrarIngresoServicio = this.data.mostrarIngresarServicio;

  constructor(public data: DataService) {
  }

  ngOnInit() {
  }

  finalizarIngresoServicio(data_ingresada: any) {
    const servicio = {
      metadata: {
        tipo_doc: this.data.tipo_doc_paciente_buscado,
        documento: this.data.documento_paciente_buscado
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
    // subo al paquete de servicios totales
    const dbServicio = this.data.db.list('servicios');
    // Se obtiene  la key de ese servicio
    servicio.id_servicio = dbServicio.push(servicio).key;

    const itemHistoriaUsuario = this.data.db.object('pacientes/' +
      this.data.tipo_doc_paciente_buscado + '/' +
      this.data.documento_paciente_buscado + '/servicios');

    itemHistoriaUsuario.update([servicio]);
    console.log('se finaliza el ingreso del servicio');
    this.data.mostrarIngresarServicio = false;
  }

  iniciarIngresoServicio() {
    this.mostrarIngresoServicio = true;
  }
}
