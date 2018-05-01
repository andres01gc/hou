import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-referencia',
  templateUrl: './item-referencia.component.html',
  styleUrls: ['./item-referencia.component.css']
})
export class ItemReferenciaComponent implements OnInit {
  @Output() texted = new EventEmitter();

  @Input() ref: any = {};
  // value: any = {};
  @Input() lock = true;

  constructor() {
  }

  ngOnInit() {
    if (this.ref == null) {
      this.ref = {};
    }
  }

  changeData(nData: any) {
    console.log('remplazando...');
    this.ref = nData;
  }

  validar() {
    // this.texted.emit(this.ref);
  }
}
