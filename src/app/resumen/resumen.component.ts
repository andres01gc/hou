import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  p: any = this.data.paciente_buscado;
  tels: any = [];

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.tels = this.p.info_basica.contacto.telefonos;

  }

  getAnos(): string {
    return parseInt(((new Date()).valueOf() - (new Date(this.p.info_basica.identidad.fecha_nacimiento)).valueOf()) / (1000 * 60 * 60 * 24 * 365)) + ' años';
  }

}

