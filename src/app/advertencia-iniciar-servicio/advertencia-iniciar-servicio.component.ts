import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-advertencia-iniciar-servicio',
  templateUrl: './advertencia-iniciar-servicio.component.html',
  styleUrls: ['./advertencia-iniciar-servicio.component.css']
})
export class AdvertenciaIniciarServicioComponent implements OnInit {

  @Output() advertido = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  continuar() {
    this.advertido.emit(true);
  }
}
