import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
  @Input() base_titulos = [];
  @Input() centrar = false;
  @Input() nombre = 'testing';
  @Input() lock = false;
  @Input() data: any;
  dt: any = null;
  @Output() selected = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.organizarTitulosSimple();
  }

  activarItem(index: number) {
    if (!this.lock) {
      this.dt[index].activo = !this.dt[index].activo;
    }
  }

  // v1 organiza el nombre de los titulos, y le crea su propio, booleano que lo contiene. todo Sé que se puede hacer mucho mucho mas limpio
  organizarTitulosSimple() {
    if (this.data == null) {
      this.dt = [];
      for (let i = 0; i < this.base_titulos.length; i++) {
        this.dt.push({'nombre': this.base_titulos[i], activo: false});
      }
    } else {
      this.dt = this.data;
    }
  }
}
