import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {CntComponent} from '../cnt/cnt.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() tabTitle: string;
  @Input() tab_activa = false;
  @ContentChildren(CntComponent) cnts: QueryList<CntComponent>;
  private as: string;
  private s: any;


  constructor() {

  }

  ngOnInit() {
    this.cnts.forEach(cnt => {
      cnt.ocultar = false;
      // cnt.presiona.subscribe(this.as, this.as, v => {
      //   console.log('slakmdvasd');
      // });
      //
    });
  }
}
