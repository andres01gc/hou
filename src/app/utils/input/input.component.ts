import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() name: string;
  @Input() placeholder: string;
  @Output() texted = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onKey(event: KeyboardEvent) {
    this.texted.emit((<HTMLInputElement>event.target).value);
  }
}
