import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hc-requerimientos',
  templateUrl: './hc-requerimientos.component.html',
  styleUrls: ['./hc-requerimientos.component.css']
})
export class HcRequerimientosComponent implements OnInit {
  @Input() lock = true;
  @Input()data: any = {
    sugeridos: {},
    evolucion: {},
    remision_interna: {},
    sugerencia_remision: {}
  };

  changeData(nData: any) {
    console.log('remplazando...');
    this.data = nData;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
