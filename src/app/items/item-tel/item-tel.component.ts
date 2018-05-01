import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-tel',
  templateUrl: './item-tel.component.html',
  styleUrls: ['./item-tel.component.css']
})
export class ItemTelComponent implements OnInit {
  @Input() telefonos: any = '';
  num = '';
  tipo_num: string;
  @Input() lock = true;
  @Output() result = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log('holi');
    console.log(this.telefonos);
    if (this.telefonos === '') {
      this.telefonos = [];
    }
  }


  agregar() {
    // console.log(this.num);
    if (this.tipo_num !== 'Tipo' && this.num !== '') {
      this.telefonos.push({tipo_num: this.tipo_num, num: this.num});
    }
    this.result.emit(this.telefonos);
  }

  eliminar(index: number) {
    this.telefonos.splice(index, 1);
    this.result.emit(this.telefonos);
  }
}
