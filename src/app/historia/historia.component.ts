import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  historia: any;
  lock = true;

  constructor(public data: DataService) {
  }


  getInfoHistoria() {
  }

  ngOnInit() {
    this.historia = this.data.paciente_buscado.payload.val().historia;
  }

  onActivate(v: any) {
    // switch (v.constructor.name) {
    //   case 'HcBasicComponent':
    //     v.changeData(this.data.paciente_buscado.payload.val().historia.info_basica);
    //     break;
    //
    //   case 'HcRevisionPorSistemComponent':
    //     v.changeData(this.data.paciente_buscado.payload.val().historia.revision_sistema);
    //     break;
    //
    //   case 'HcExamenFisicoComponent':
    //     v.changeData(this.data.paciente_buscado.payload.val().historia.examen_fisico);
    //     break;
    //
    //   case 'PgOdontogramaComponent':
    //     v.changeData(this.data.paciente_buscado.payload.val().historia.odontograma);
    //     break;
    //
    //   case 'HcRequerimientosComponent':
    //     v.changeData(this.data.paciente_buscado.payload.val().historia.requerimientos_paciente);
    //     break;
    // }
  }
}
