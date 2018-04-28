import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() name: string;
  @Input() placeholder = '';
  @Input() lock = true;
  @Input() type = 'text';
  @Input() value;
  @Input() cagetegoria = '';
  @Input() sub_cagetegoria = '';
  @Input() nombre_db = '';
  @Output() texted = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (this.placeholder === '') {
      this.placeholder = this.name;
    }
  }

  onKey(event: KeyboardEvent) {
    this.texted.emit((<HTMLInputElement>event.target).value);
  }
}
