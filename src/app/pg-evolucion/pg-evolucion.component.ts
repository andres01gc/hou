import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pg-evolucion',
  templateUrl: './pg-evolucion.component.html',
  styleUrls: ['./pg-evolucion.component.css']
})
export class PgEvolucionComponent implements OnInit {
  @Output() cancelar = new EventEmitter();
  @Output() evolucion = new EventEmitter();
  ev: string;

  constructor() {
  }

  ngOnInit() {
  }

  evolucionar() {
    this.evolucion.emit({evolucion: this.ev, fecha: new Date().toLocaleString()});
    this.cancelar.emit(false);
  }

  cerrar() {
    this.cancelar.emit(false);
  }

}
