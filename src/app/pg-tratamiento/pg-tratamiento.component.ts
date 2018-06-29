import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pg-tratamiento',
  templateUrl: './pg-tratamiento.component.html',
  styleUrls: ['./pg-tratamiento.component.css']
})
export class PgTratamientoComponent implements OnInit {
  tab_is_selected: boolean;
  id_tratamiento;

  constructor() {
  }

  ngOnInit() {
  }
}
