import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  tels: any = [];
  historia: any;

  constructor(private data: DataService) {
    console.log('testing pg hc');
    this.historia = this.data.info_paciente_buscado.historia;
    console.log(this.historia);
  }

  ngOnInit() {
  }

  getAnos(): string {
    const as = (new Date().valueOf());
    const bd = new Date(this.historia['Información General']['Identidad']['Nacimiento']).valueOf();
    const edad = Math.trunc(((as - bd) / (1000 * 60 * 60 * 24 * 365)));
    return edad + ' años';
  }

}

