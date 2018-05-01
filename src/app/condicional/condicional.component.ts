import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent implements OnInit {
  seleccion: string;
  data_pag: any = {};
  @Input() data = {
    tam: 'm',
    nombre: 'prueba',
    seleccionables: ['a', 'b', 'c', 'd', 'e'],
    condicionables: {
      a: [{
        tipo_item: 'input',
        type: 'text',
        tam: 'm',
        placehoder: '',
        nombre: 'Item a1!'
      }, {
        tipo_item: 'input',
        type: 'text',
        tam: 'm',
        placehoder: '',
        nombre: 'Item a2'
      }], b: [{
        tipo_item: 'input',
        type: 'text',
        tam: 'm',
        placehoder: '',
        nombre: 'Item b1!'
      }, {
        tipo_item: 'input',
        type: 'text',
        tam: 'm',
        placehoder: '',
        nombre: 'Item b2'
      }], c: [], d: [], e: []
    }
  };

  @Input() lock = false;

  constructor() {
  }

  cambiarInfoCondicional(seleccion: string) {
  }

  ngOnInit() {
  }

}
