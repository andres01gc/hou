import {AfterContentInit, AfterViewInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  @Input() agregable = false;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() alAgregar = new EventEmitter();
  public nombreEscrito: String;
  @Output() tabSeleccionada = new EventEmitter();

  ngAfterContentInit() {
    this.tabSeleccionada.emit(this.tabs[0].tabTitle);
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tb => tb.tab_activa = false);
    tab.tab_activa = true;
    this.tabSeleccionada.emit(tab.tabTitle);
  }

  alAgregarse() {
    this.alAgregar.emit(this.nombreEscrito);
    this.nombreEscrito = '';
  }
}
