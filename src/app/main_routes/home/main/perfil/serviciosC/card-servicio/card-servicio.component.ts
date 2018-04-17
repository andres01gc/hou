import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../../../../services/data.service';

@Component({
  selector: 'app-card-servicio',
  templateUrl: './card-servicio.component.html',
  styleUrls: ['./card-servicio.component.css']
})
export class CardServicioComponent implements OnInit {
  @Input() serv: any;

  constructor(public data: DataService) {
  }

  ngOnInit() {
  }

  seleccionarServicio() {
    this.data.servicio_seleccionado = this.serv;
  }
}
