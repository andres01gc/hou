import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../../../../services/data.service';

@Component({
  selector: 'app-card-servicio',
  templateUrl: './card-servicio.component.html',
  styleUrls: ['./card-servicio.component.css']
})
export class CardServicioComponent implements OnInit {
  public serv: any;
  @Input() id_serv: string;

  constructor(public data: DataService) {
  }

  ngOnInit() {
    this.bucarServicio(this.id_serv);
  }

  seleccionarServicio() {
    console.log('se ha seleccionado el servicio con id ' + this.id_serv);
    this.data.servicio_seleccionado_paciente = this.serv;
    this.data.id_servicio_seleccionado = this.id_serv;
  }

  bucarServicio(id: string) {
    this.data.db.object('servicios/' + id).valueChanges().subscribe(item => {
      this.serv = item;
    });
  }
}
