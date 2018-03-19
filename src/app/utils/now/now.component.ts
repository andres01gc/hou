import {Attribute, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {
  private date;
  private format: any;

  constructor(@Attribute('format') format) {
    this.format = format;
    this.date = new Date();

    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  ngOnInit(): void {

  }
}
