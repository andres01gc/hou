import {Component, ContentChildren, EventEmitter, OnInit, Output, QueryList, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {TabComponent} from '../../tab/tab.component';
import {HcBasicComponent} from '../../historia/hc-pages/hc-basic/hc-basic.component';
import {HcRevisionPorSistemComponent} from '../../historia/hc-pages/hc-revision-por-sistem/hc-revision-por-sistem.component';
import {HcExamenFisicoComponent} from '../../historia/hc-pages/hc-examen-fisico/hc-examen-fisico.component';
import {PgOdontogramaComponent} from '../../pg-odontograma/pg-odontograma.component';
import {HcRequerimientosComponent} from '../../hc-requerimientos/hc-requerimientos.component';

@Component({
  selector: 'app-ingresar-paciente',
  templateUrl: './ingresar-paciente.component.html',
  styleUrls: ['./ingresar-paciente.component.css']
})
export class IngresarPacienteComponent implements OnInit {
  @ViewChild(HcBasicComponent) basicComponent: HcBasicComponent;
  @ViewChild(HcRevisionPorSistemComponent) revision_sistema: HcRevisionPorSistemComponent;
  @ViewChild(HcExamenFisicoComponent) examen_fisico: HcExamenFisicoComponent;
  @ViewChild(PgOdontogramaComponent) odontograma: PgOdontogramaComponent;
  @ViewChild(HcRequerimientosComponent) requerimientos_paciente: HcRequerimientosComponent;
  @Output() terminado = new EventEmitter();

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  finalizarIngreso() {
    var itemRef = this.data.db.object('pacientes/' + this.basicComponent.data.identidad.tipo_documento + '/' +
      this.basicComponent.data.identidad.documento + '/historia');
    //  se guarda los datos en la historia clínica inicial.
    itemRef.set({
      info_basica: this.basicComponent.data,
      revision_sistema: this.revision_sistema.data,
      odontograma: this.odontograma.data,
      examen_fisico: this.examen_fisico.data,
      requerimientos_paciente: this.requerimientos_paciente.data
    });

    var servicio = {
      estado: 'ACTIVO',
      nombre: 'Prueba de estados',
      tipo_servicio: 'periodoncia',
      diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, beatae commodi fuga incidunt odit placeat quo' +
      ' soluta vel vero voluptate. Cupiditate dolorum exercitationem maiores necessitatibus neque officiis sed sunt veritatis!',
      evoluciones: [{fecha: '', contenido: ''}],
      citas: {
        id_cita: [
          {
            persona_asignada: {},
            fecha_asignada: {}
          }
        ]
      },
      prox_cita: 'aún no se ha asignado cita'
    };

    var items = this.data.db.object('pacientes/' + this.basicComponent.data.identidad.tipo_documento + '/' + this.basicComponent.data.identidad.documento + '/servicios/activos');
    items.set([servicio]
    );

    var i = this.data.db.list('servicios_sin_asignar/especialidad_x');
    i.push(servicio);
    this.terminado.emit(true);
  }
}

