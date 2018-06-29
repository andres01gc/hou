import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-card-user-servicio',
  templateUrl: './card-user-servicio.component.html',
  styleUrls: ['./card-user-servicio.component.css']
})
export class CardUserServicioComponent implements OnInit {
  @Output() alSeleccionar = new EventEmitter();
  @Input() idServicio: string;
  @Input() seleccionado: boolean;
  sv: any;
  public conCita = false;
  fechaBonita = 'probando fecha';

  constructor(public data: DataService) {
  }

  ngOnInit() {
    this.buscarInfoServicio();
  }

  pruebaAnalisisCita(): string {
    const as = (new Date().valueOf());
    console.log(this.sv.metadata.fecha);
    const bd = new Date(this.sv.metadata.fecha).valueOf();
    const edad = Math.trunc(((as - bd) / (1000 * 60 * 60)));
    console.log('probando calculos edad');
    console.log(edad);
    this.obtenerFechaBonita();
    return edad + ' horas';
  }

  obtenerFechaBonita() {
    const bd = new Date(this.sv.metadata.fecha);
    const dia = bd.getDay();
    const mes = bd.getMonth();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const year = bd.getFullYear();
    this.fechaBonita = 'próx.' + dia + ' de ' + meses[mes];
  }

  buscarInfoServicio() {
    console.log('el id es:' + this.idServicio);
    this.data.db.object('servicios/' + this.idServicio).valueChanges().subscribe(value => {
      this.sv = value;
      this.sv.metadata.id = this.idServicio;
      console.log(this.sv);

      if (this.sv.metadata.fecha === 'null') {
        this.conCita = false;
      } else {
        this.conCita = true;
      }
      this.pruebaAnalisisCita();
    });
    // console.log('la fecha es:' + this.sv.metadata.fecha);

  }

  alSelecct() {
    console.log('se selecciona la card');
    this.alSeleccionar.emit(this.sv);
    // this.seleccionado = true;
  }
}
