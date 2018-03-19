import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-snakbar',
  templateUrl: './snakbar.component.html',
  styleUrls: ['./snakbar.component.css']
})
export class SnakbarComponent implements OnInit {
  snacktive = false;
  msg = 'testing';

  constructor() {
  }

  ngOnInit() {
  }

  show(msg: string) {
    this.msg = msg;
    this.snacktive = true;
    setTimeout(() => this.snacktive = !this.snacktive, 3000);
  }
}
