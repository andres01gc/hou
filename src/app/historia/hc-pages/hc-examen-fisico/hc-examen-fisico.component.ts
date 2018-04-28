import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hc-examen-fisico',
  templateUrl: './hc-examen-fisico.component.html',
  styleUrls: ['../commonstyle.css', './hc-examen-fisico.component.css']
})
export class HcExamenFisicoComponent implements OnInit {
  @Input() lock = true;
  @Input() data: any = {
    fisico: {},
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
