import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagina-historia',
  templateUrl: './pagina-historia.component.html',
  styleUrls: ['./pagina-historia.component.css']
})
export class PaginaHistoriaComponent implements OnInit {
  @Input() sub_categorias: any;
  @Input() titulo_pag: any;
  @Input() lock = false;
  @Input() data_pag: any = null;
  @Output() selected = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (this.data_pag === null) {
      this.crearEstructura();
    }
  }

  crearEstructura() {
    this.data_pag = {};
    for (const s of this.sub_categorias) {
      const sub: any = {};
      for (const item of s.items) {
        sub[item.nombre] = '';
      }
      this.data_pag[s.sub_titulo] = sub;
    }
  }

  alEscribit() {
    this.selected.emit();
  }
}

// interface dataObject {
//   [key: string]: any;
// }
