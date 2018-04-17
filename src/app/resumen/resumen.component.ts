import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  p: any = this.data.paciente_buscado.historia;
  tels: any = [];

  constructor(private data: DataService) {
    // obtener telefonos
    // this.tels = this.p.info_basica.contacto.telefonos;
  }

  ngOnInit() {

  }

  getAnos(): string {
    const as = (new Date().valueOf());
    const bd = new Date(this.p.info_basica.identidad.fecha_nacimiento).valueOf();
    return ((as - bd) / (1000 * 60 * 60 * 24 * 365)) + ' años';
  }

}

