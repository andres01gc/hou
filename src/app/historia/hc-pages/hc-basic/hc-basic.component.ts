import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-hc-basic',
  templateUrl: './hc-basic.component.html',
  styleUrls: ['../commonstyle.css', './hc-basic.component.css']
})
export class HcBasicComponent implements OnInit {
  //  estructura de la base de datos
  @Input() lock = true;
  @Input() data: any = {
    contacto: {dir: {}},
    identidad: {},
    info_personal: {},
    seguridad_social: {},
    referencias: [],
    responsables: {}
  };

  changeData(nData: any) {
    console.log('remplazando...');
    this.data = nData;
    console.log(this.data);
  }

  constructor() {

  }

  toggle() {
    this.lock = !this.lock;
  }

  ngOnInit() {

  }

  test(t: any) {
    console.log(t);
  }

  print() {
    console.log(this.data);
  }
}
