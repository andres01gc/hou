import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-asignar-cita',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.css']
})
export class AsignarComponent implements OnInit {
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
    console.log('la fecha agregada es ' + this.fechaAgregada);
    this.asig(this.fechaAgregada);
  }

  alAsg() {
    this.visibility = 'hidden';
    this.asig(false);
  }
}
