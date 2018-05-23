import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  isLock = true;
  @Input() data: any;
  @Input() data_pag = null;
  @Input() ttl: string;
  @Input() subttl: string;

  constructor(public dt: DataService) {
    this.buscarHistoria();
  }

  ngOnInit() {
    // console.log(this.historia);
  }

  buscarHistoria() {
    this.data = this.dt.paginas_historia;
    this.data_pag = this.dt.info_paciente_buscado.historia;
  }
}
