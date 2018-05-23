import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-referencia',
  templateUrl: './item-referencia.component.html',
  styleUrls: ['./item-referencia.component.css']
})
export class ItemReferenciaComponent implements OnInit {
  @Output() texted = new EventEmitter();
  @Input() data: any = {};
  // value: any = {};
  @Input() lock = true;
  @Input() parentesco = '';
  @Input() isParentescoLock = true;

  constructor() {
  }

  ngOnInit() {
    // if (this.parentesco != )
    // console.log('probando ref');
    // if (this.estructura == null) {
    //   this.estructura = {};
    // }
  }

  changeData(nData: any) {
    // console.log('remplazando...');
    this.data = nData;
  }

  validar() {
    this.texted.emit(this.data);
  }
}
