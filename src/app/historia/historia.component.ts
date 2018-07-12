import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  isLock = false;
  @Input() estructura: any;
  @Input() dataGuardada = null;
  @Input() ttl: string;
  @Input() subttl: string;

  constructor(public dt: DataService, public location: Location) {
    this.buscarHistoria();
  }

  ngOnInit() {
    // console.log(this.historia);
  }

  buscarHistoria() {
    this.estructura = this.dt.paginas_historia;
    this.dataGuardada = this.dt.info_paciente_buscado.historia;
    console.log('se supone que se està buscancdo la historia');
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
}
