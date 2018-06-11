import {AfterContentInit, AfterViewInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  @Input() agregable = true;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() alAgregar = new EventEmitter();

  ngAfterContentInit() {
  }

  selectTab(tab: TabComponent) {
    // TODO averiguar, porque se llama este método al crearse este compmonente! :/, tocó crear ese if para evitar el error
    this.tabs.toArray().forEach(tb => tb.tab_activa = false);
    tab.tab_activa = true;
  }

}
