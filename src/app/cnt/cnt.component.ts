import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventListener} from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-cnt',
  templateUrl: './cnt.component.html',
  styleUrls: ['./cnt.component.css']
})
export class CntComponent implements OnInit {
  @Input() titulo: string;
  @Input() ocultar = false;
  @Output() presiona = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    console.log('está llegando');
    // this.presiona.emit(this);
    this.ocultar = !this.ocultar;
  }
}
