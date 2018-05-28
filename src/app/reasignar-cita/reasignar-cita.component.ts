import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-reasignar-cita',
  templateUrl: './reasignar-cita.component.html',
  styleUrls: ['./reasignar-cita.component.css']
})
export class ReasignarCitaComponent implements OnInit {

  @HostBinding('style.visibility') private visibility = 'hidden';
  cancelFun: (n: any) => void;
  asig: (n: any) => any;
  fechaAgregada = '';

  constructor() {
  }

  ngOnInit() {
  }

  iniciar(alAsignar: (n: any) => any, alCancelar: (n: any) => void) {
    this.cancelFun = alCancelar;
    this.asig = alAsignar;
    this.visibility = 'visible';
  }

  alCan() {
    this.visibility = 'hidden';
    this.asig(this.fechaAgregada);
  }

  alAsg() {
    this.visibility = 'hidden';
    this.asig(false);
  }
}
