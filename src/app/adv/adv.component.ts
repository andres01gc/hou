import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.css']
})
export class AdvComponent implements OnInit {
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

  alCancelarAccion() {
    this.visibility = 'hidden';
    this.asig(this.fechaAgregada);
  }

  alCancelarCita() {
    this.visibility = 'hidden';
    this.asig(false);
  }
}
