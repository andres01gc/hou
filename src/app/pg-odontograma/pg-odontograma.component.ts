import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pg-odontograma',
  templateUrl: './pg-odontograma.component.html',
  styleUrls: ['./pg-odontograma.component.css']
})
export class PgOdontogramaComponent implements OnInit {
  diente = 0;
  maxilar_seleccionado: string;
  nombreDienteSeleccionado: string;
  @Input() lock = true;
  parteSelected = '';

  partes_dientes: any = {
    a: 'parte_uno',
    b: 'parte_dos',
    c: 'vestibular',
    d: 'parte_cuatro',
    e: 'lingual o palatino', // TODO palatina
    f: 'parte_seis',
    g: 'Oclusal'
  };
  @Input() data_pag: any = [];
  @Output() alLlenar = new EventEmitter();
  dientesInfo = [
    {id: 11, nombre: 'Incisivo central'},
    {id: 12, nombre: 'Incisivo lateral'},
    {id: 13, nombre: 'Canino'},
    {id: 14, nombre: 'Primer premolar'},
    {id: 15, nombre: 'Segundo premolar'},
    {id: 16, nombre: 'Primer premolar'},
    {id: 17, nombre: 'Segundo molar'},
    {id: 18, nombre: 'Tercer molar'},

    {id: 21, nombre: 'Incisivo central'},
    {id: 22, nombre: 'Incisivo lateral'},
    {id: 23, nombre: 'Canino'},
    {id: 24, nombre: 'Primer premolar'},
    {id: 25, nombre: 'Segundo premolar'},
    {id: 26, nombre: 'Primer premolar'},
    {id: 27, nombre: 'Segundo molar'},
    {id: 28, nombre: 'Tercer molar'},

    {id: 31, nombre: 'Incisivo central'},
    {id: 32, nombre: 'Incisivo lateral'},
    {id: 33, nombre: 'Canino'},
    {id: 34, nombre: 'Primer premolar'},
    {id: 35, nombre: 'Segundo premolar'},
    {id: 36, nombre: 'Primer premolar'},
    {id: 37, nombre: 'Segundo molar'},
    {id: 38, nombre: 'Tercer molar'},

    {id: 41, nombre: 'Incisivo central'},
    {id: 42, nombre: 'Incisivo lateral'},
    {id: 43, nombre: 'Canino'},
    {id: 44, nombre: 'Primer premolar'},
    {id: 45, nombre: 'Segundo premolar'},
    {id: 46, nombre: 'Primer premolar'},
    {id: 47, nombre: 'Segundo molar'},
    {id: 48, nombre: 'Tercer molar'}
  ];

  changeData(nData: any) {
    console.log('remplazando...');
    this.data_pag = nData;
  }


  constructor() {
    this.iniciarEstructuraDatos();
  }

  ngOnInit() {

  }

  iniciarEstructuraDatos() {
    for (var cont = 0, t_id = 10, i = 0; i < 32; i++) {
      if (cont === 8) {
        cont = 0;
        t_id += 10;
        console.log(' ');
      }
      cont++;
      const final_id = t_id + cont;
      var ob = {};
      ob['id'] = final_id;
      ob['general'] = '';
      ob[this.partes_dientes['a']] = '';
      ob[this.partes_dientes['b']] = '';
      ob[this.partes_dientes['c']] = '';
      ob[this.partes_dientes['d']] = '';
      ob[this.partes_dientes['e']] = '';
      ob[this.partes_dientes['f']] = '';
      ob[this.partes_dientes['g']] = '';
      this.data_pag.push(ob);
    }
    console.log(this.data_pag);
  }


  estadoParteDiente(id: number, parteDiente: string): any {
    let des_final = '';
//  para el caso de la parte derecha, donde aún no se ha seleccionado un diente TODO it could be moore kiut
    if (id === 0) {
      des_final = '';
    } else {
      des_final = this.data_pag[this.data_pag.map(x => x.id).indexOf(id)][parteDiente];
    }
    // console.log(des_final);

    if (parteDiente === 'general') {
      return des_final;
    }
    // TODO está horrible, pero funciona, se debe pensar una manera mas limpia

    switch (des_final) {

      case '':
        return 'rgb(200,200,200)';

      case 'b':
        return '#2986FF';

      case 'm':
        return '#F44D22';

    }
  }


  selectDiente(diente_seleccionado: number) {
    this.diente = diente_seleccionado;
    this.parteSelected = '';
    // this.inforomacionDienteSelecionado = this.tst[this.tst.map(x => x.id).indexOf(diente_seleccionado)];

    for (let i = 0; i < this.dientesInfo.length; i++) {
      if (this.dientesInfo[i].id === diente_seleccionado) {
        // console.log('se seleccionó ' + this.dientesInfo[i].nombre);
        this.nombreDienteSeleccionado = this.dientesInfo[i].nombre;
        break;
      }
    }

    // // se selcciona el molar  TODO SE QUE SE PUEDE HACER MUCHO MAS LINDO
    switch (+diente_seleccionado.toString().split('')[0]) {
      case 1:
        this.maxilar_seleccionado = 'Maxilar superior izquierdo';
        break;
      case 2:
        this.maxilar_seleccionado = 'Maxilar superior derecho';
        break;
      case 3:
        this.maxilar_seleccionado = 'Maxilar inferior izquierdo';
        break;
      case 4:
        this.maxilar_seleccionado = 'Maxilar inferior izquierdo';
        break;
    }
  }


  selectParteDiente(parteSeleccionada: string) {
    console.log('se selecciona la parte:' + parteSeleccionada);
    this.parteSelected = parteSeleccionada;
  }

  editar(color: string) {

    this.data_pag[this.data_pag.map(x => x.id).indexOf(this.diente)][this.parteSelected] = color;
    this.alLlenar.emit(this.data_pag);
  }

  editarGeneral(g: string) {
    const este = this.data_pag[this.data_pag.map(x => x.id).indexOf(this.diente)]['general'];
    if (este === g) {
      this.data_pag[this.data_pag.map(x => x.id).indexOf(this.diente)]['general'] = '';
    } else {
      this.data_pag[this.data_pag.map(x => x.id).indexOf(this.diente)]['general'] = g;
    }
  }
}
