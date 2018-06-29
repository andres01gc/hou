import {Component, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Location} from '@angular/common';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnChanges {
  isLock = false;
  estructura: any[];
  @Input() dataGuardada = null;
  @Input() ttl: string;
  @Input() subttl: string;
  @HostBinding('style.width') private ssize = '';

  sizes: any = {
    xs: [0, 0, 0],
    s: [50, 25, 16.2],
    m: [100, 50, 33],
    l: [100, 100, 100],
    xl: [0, 0, 0]
  };
  ss = 0;
  tipos_inputs = ['texto', 'fecha', 'múltiple', 'referencia', 'Teléfonos'];
  nombreTab: string;
  nombreCnt: string;
  private cntSeleccionado: string;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    var ss = 0;
    if (event.target.innerWidth < 500) {
      // movil
      ss = 0;
    } else if (event.target.innerWidth < 900) {
      ss = 1;
      // tablet
    } else {
      ss = 2;
      // pc
    }
  }

  @Input() set _estructura(value: any) {
    this.estructura = value;
    console.log('testing');
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  constructor(public dt: DataService, public location: Location) {
    this.buscarHistoria();
  }

  ngOnInit() {
    // console.log(this.historia);
  }

  buscarHistoria() {
    this.estructura = this.dt.paginas_ingreso;
    // this.dataGuardada = this.dt.info_paciente_buscado.historia;
    console.log('se supone que se está buscancdo la historia');
    console.log(this.dt.paginas_all);
  }

  guardarDeNuevo() {
  }

  crearVar(dataStr: string[], $value: string | number | boolean) {
    // TODO revisar que este metodo se llame despues de llenar un campo, no por cada letra, para evitar tanto calculo.
    var actual = {};
    actual[dataStr[0]] = this.crear(dataStr, 0, $value);
    this.mergeDeep(this.dataGuardada, actual);
    // console.log(this.dataGuardada);
  }

  goBack() {
    this.location.back();
  }

  cargarDataItem(params: any[]): any {
    var o = this.dataGuardada;
    for (const param of params) {
      if (o !== null && o[param] !== undefined) {
        o = o[param];
      } else {
        return '';
      }
    }
    return o;
  }

  isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  /**
   * Deep merge two objects. https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
   * @param target
   * @param ...sources
   */

  mergeDeep(target, ...sources) {
    if (!sources.length) {
      return target;
    }
    const source = sources.shift();
    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, {[key]: {}});
          }
          this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, {[key]: source[key]});
        }
      }
    }
    return this.mergeDeep(target, ...sources);
  }

  crear(s: string[], pos: number, value: any): any {
    pos++;
    var ob = {};
    if (pos < s.length) {
      ob[s[pos]] = this.crear(s, pos, value);
    } else {
      ob = value;
    }
    return ob;
  }

  agregarPg(nPag: string) {
    console.log('se agreaga pagina');
    // TODO editar el obj seleccionado.
    this.estructura.push({
      tipo_item: 'pag', nombre: nPag,
      items: []
    });
  }

  agregarEntrada(tipo: string, cnt: string) {
    console.log('se agreaga entrada');

    console.log(cnt);
    for (var i = this.estructura.length - 1; i >= 0; --i) {
      if (this.estructura[i].nombre === this.nombreTab) {
        console.log('se encuentra tab');
        for (var j = this.estructura[i].items.length - 1; j >= 0; --j) {
          console.log(this.estructura[i].items[j].nombre);
          if (this.estructura[i].items[j].nombre === cnt) {
            this.estructura[i].items[j].items.push({
              tipo_item: 'input',
              type: 'text',
              tam: 'l',
              placehoder: '',
              nombre: 'Observaciones'
            });
          }
        }
        this.nombreCnt = '';
        return;
      }
    }
  }

  selectTipo(tipo: string, nombre: string) {

  }

  agregarCnt() {
    console.log('se agreaga contenedor');
    for (var i = this.estructura.length - 1; i >= 0; --i) {
      if (this.estructura[i].nombre === this.nombreTab) {

        this.estructura[i].items.push({
          tipo_item: 'cnt', nombre: this.nombreCnt,
          items: []
        });
        this.nombreCnt = '';
        return;
      }
    }
  }

  eliminarPg() {
    for (var i = this.estructura.length - 1; i >= 0; --i) {
      if (this.estructura[i].nombre === this.nombreTab) {
        this.estructura.splice(i, 1);
      }
    }
    // console.log('se elimina pagina');
  }

  eliminarEntrada() {
    // console.log('se elimina entrada');
  }

  eliminarCnt() {
    // console.log('se elimina contendor');
  }

  editarPg() {

  }
}
