import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {EditorComponent} from '../../editor/editor.component';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  pg_selected: any = this.data.paginas_ingreso;
  i: any;
  @ViewChild(EditorComponent) eddit: EditorComponent;

  constructor(public data: DataService) {
  }

  ngOnInit() {
  }

  seleccionarPg(pg: any, i: any) {
    this.i = i;
    this.eddit._estructura = pg.estructura;
  }
}
