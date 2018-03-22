import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  p: any = this.data.paciente_buscado;

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }
}

