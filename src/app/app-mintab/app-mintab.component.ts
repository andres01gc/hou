import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-mintab',
  templateUrl: './app-mintab.component.html',
  styleUrls: ['./app-mintab.component.css']
})
export class AppMintabComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    // let tab_activ = this.tabs.filter((tab) => tab.tab_activa);
    // if (activeTabs.length === 0) {
    //   this.selectTab(this.tabs.first);
    // }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tb => tb.tab_activa = false);
    tab.tab_activa = true;
  }
}
