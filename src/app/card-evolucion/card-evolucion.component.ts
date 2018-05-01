import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-evolucion',
  templateUrl: './card-evolucion.component.html',
  styleUrls: ['./card-evolucion.component.css']
})
export class CardEvolucionComponent implements OnInit {
  @Input() evolucion: any;
  @Input() id: any;

  constructor() {
  }

  ngOnInit() {
    console.log('el numero de la evolución es ' + this.id);
  }

}
