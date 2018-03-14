import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  active = false;
  today = Date.now();

  tonggleMenu() {
    console.log('ddd');
    this.active = !this.active;
  }
}
