import {AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
  }

  selectTab(tab: TabComponent) {
    // TODO averiguar, porque se llama este método al crearse este compmonente! :/, tocó crear ese if para evitar el error
    this.tabs.toArray().forEach(tb => tb.tab_activa = false);
      tab.tab_activa = true;
  }

}
