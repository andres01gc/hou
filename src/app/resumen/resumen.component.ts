import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  p: any = this.data.paciente_buscado.payload.val().historia;
  tels: any = [];

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  getAnos(): string {
    const as = (new Date().valueOf());
    console.log('holu');
    console.log(this.p.info_basica.identidad.fecha_nacimiento);
    const bd = new Date(this.p.info_basica.identidad.fecha_nacimiento).valueOf();
    const edad = Math.trunc(((as - bd) / (1000 * 60 * 60 * 24 * 365)));
    return edad + ' años';
  }
}

