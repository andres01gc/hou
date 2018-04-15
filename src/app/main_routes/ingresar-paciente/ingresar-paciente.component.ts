import {Component, ContentChildren, OnInit, QueryList, ViewChild} from '@angular/core';
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

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  finalizarIngreso() {
    // const itemRef = this.data.db.object('pacientes/' + this.tipo_doc + '/' + this.documento);
    // itemRef.set({nombre: this.nombre, apellidos: this.apellidos, tipo_documento: this.tipo_doc, documento: this.documento});
  }

  testing() {
    console.log(this.basicComponent.data);
    console.log(this.revision_sistema.data);
    console.log(this.odontograma.data);
    console.log(this.requerimientos_paciente.data);
  }
}

