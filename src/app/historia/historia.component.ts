import {Component, OnInit} from '@angular/core';
import {HcBasicComponent} from './hc-pages/hc-basic/hc-basic.component';
import {DataService} from '../services/data.service';
import {HcRevisionPorSistemComponent} from './hc-pages/hc-revision-por-sistem/hc-revision-por-sistem.component';
import {HcExamenFisicoComponent} from './hc-pages/hc-examen-fisico/hc-examen-fisico.component';
import {PgOdontogramaComponent} from '../pg-odontograma/pg-odontograma.component';
import {HcRequerimientosComponent} from '../hc-requerimientos/hc-requerimientos.component';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  constructor(public data: DataService) {

  }

  ngOnInit() {
  }

  onActivate(v: any) {
    switch (v.constructor.name) {
      case 'HcBasicComponent':
        v.changeData(this.data.paciente_buscado.payload.val().historia.info_basica);
        break;

      case 'HcRevisionPorSistemComponent':
        v.changeData(this.data.paciente_buscado.payload.val().historia.revision_sistema);
        break;

      case 'HcExamenFisicoComponent':
        v.changeData(this.data.paciente_buscado.payload.val().historia.examen_fisico);
        break;

      case 'PgOdontogramaComponent':
        v.changeData(this.data.paciente_buscado.payload.val().historia.odontograma);
        break;

      case 'HcRequerimientosComponent':
        v.changeData(this.data.paciente_buscado.payload.val().historia.requerimientos_paciente);
        break;
    }
  }
}
