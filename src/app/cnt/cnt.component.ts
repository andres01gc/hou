import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cnt',
  templateUrl: './cnt.component.html',
  styleUrls: ['./cnt.component.css']
})
export class CntComponent implements OnInit {
  @Input() titulo: string;
  @Input() ocultar = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.ocultar = !this.ocultar;
  }
}
