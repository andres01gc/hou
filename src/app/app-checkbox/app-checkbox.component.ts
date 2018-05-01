import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './app-checkbox.component.html',
  styleUrls: ['./app-checkbox.component.css']
})
export class AppCheckboxComponent implements OnInit {
  @Input() titulo = '';
  @Input() active = '';

  constructor() {
  }

  ngOnInit() {
  }
}
