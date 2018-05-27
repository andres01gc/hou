import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-reasignar-cita',
  templateUrl: './pop-not.component.html',
  styleUrls: ['./pop-not.component.css']
})
export class PopNotComponent implements OnInit {
  isLock = false;
  cardVisible = false;
  finalizar: any = {};
  editar: any = {};
  cancelar: any = {};

  @Input() estructura: any;
  dataGuardada = null;
  ttl: string;
  subttl: string;
  private alFinalizar: (n: any) => any;
  private alCancelar: (n: any) => void;
  @HostBinding('style.width') private w = '';
  @HostBinding('style.height') private h = '';
  @HostBinding('style.visibility') private visibility = 'hidden';
  constructor(public dt: DataService) {
  }

  iniciarPopUp(ttl: string, subttl: string, estructuraData: any, data_guardada, editable: boolean,
               finalizar: (n: any) => any, cancelar: (n: any) => void) {
    this.ttl = ttl;
    this.subttl = subttl;
    this.estructura = estructuraData;
    this.isLock = !editable;
    this.alFinalizar = finalizar;
    this.alCancelar = cancelar;

    if (data_guardada === null) {
      this.dataGuardada = {};
    } else {
      this.dataGuardada = data_guardada;
    }
    console.log('se inicia el pop');
    console.log(this.dataGuardada);
    this.visibility = 'visible';

  }


  finalizarPop() {
    console.log('finaliza pop');
    this.alFinalizar(this.dataGuardada);
    this.dataGuardada = null;
    this.alFinalizar = null;
    this.visibility = 'hidden';
  }

  // prueba() {
  //   var s: any = {};
  //   s['asdv'].['s'] = 'qwqwenj';
  //   console.log(this.dataGuardada);
  // }

  crearVar(dataStr: string[], $value: string | number | boolean) {
    // TODO revisar que este metodo se llame despues de llenar un campo, no por cada letra, para evitar tanto calculo.
    let actual = {};
    actual[dataStr[0]] = this.crear(dataStr, 0, $value);
    this.mergeDeep(this.dataGuardada, actual);
    // console.log(this.dataGuardada);
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
    let ob = {};
    if (pos < s.length) {
      ob[s[pos]] = this.crear(s, pos, value);
    } else {
      ob = value;
    }
    return ob;
  }


  it(elIt: any) {
    let itt = {};

    if (elIt.items) {
      for (const item of elIt.items) {
        if (item.nombre) {
          itt[item.nombre] = this.it(item);
        }
      }
    } else {
      itt = '';
    }
    return itt;
  }

  cancelarPop() {
    this.alCancelar(this.dataGuardada);
    this.alCancelar = null;
    this.visibility = 'hidden';
  }

  cargarDataItem(params: any[]): any {
    let o = this.dataGuardada;
    for (const param of params) {
      if (o !== null && o[param] !== undefined) {
        o = o[param];
      } else {
        return '';
      }
    }
    return o;
  }

  ngOnInit(): void {
  }

}
