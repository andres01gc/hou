import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-dir',
  templateUrl: './item-dir.component.html',
  styleUrls: ['./item-dir.component.css']
})
export class ItemDirComponent implements OnInit {
  dir = {};
  @Output() result = new EventEmitter();
  @Input() lock = true;


  constructor() {
  }

  ngOnInit() {
  }

  validar() {
    this.result.emit(this.dir);
  }
}

