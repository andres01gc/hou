import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  p: any;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.p = this.data.paciente_buscado;
  }
}

