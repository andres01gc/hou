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
    this.historia = this.data.info_paciente_buscado.historia;
    console.log(this.historia);
  }
}
