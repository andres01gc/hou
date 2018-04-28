import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() titulo: string;
  @Input() data: any[];
  @Input() value = '';
  @Output() selected = new EventEmitter();
  // @Input() placeholder: string;
  @Input() lock = false;

  constructor() {
    if (this.value = '') {
      this.value = this.titulo;
    }
  }

  ngOnInit() {

  }

  onChange(s: any) {
    this.selected.emit(s);
    // console.log(s);
  }
}
