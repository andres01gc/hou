import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hc-revision-por-sistem',
  templateUrl: './hc-revision-por-sistem.component.html',
  styleUrls: ['../commonstyle.css', './hc-revision-por-sistem.component.css']
})
export class HcRevisionPorSistemComponent implements OnInit {
  @Input() lock = true;

  @Input() data: any = {
    nervioso: {},
    respiratorio: {},
    cardiovascular: {},
    gastrointestinal: {},
    genitourinario: {},
    endocrino: {},
    osteoarticular: {},
    epidermis: {},
    comentarios: {}
  };

  constructor() {
  }

  changeData(nData: any) {
    console.log('remplazando...');
    this.data = nData;
  }

  ngOnInit() {
  }

}
