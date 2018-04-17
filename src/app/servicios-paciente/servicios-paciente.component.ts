import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-servicios-paciente',
  templateUrl: './servicios-paciente.component.html',
  styleUrls: ['./servicios-paciente.component.css']
})
export class ServiciosPacienteComponent implements OnInit {
  servicios_activos: any;
  servicio_finalizados: any;
  servicios_incompletos: any;

  constructor(public data: DataService) {
    this.organizarServicios();
  }

  ngOnInit() {
  }

  organizarServicios() {
    this.servicios_activos = this.data.paciente_buscado.servicios.activos;
    console.log('Servicios Activos');
    // console.log(this.servicios_activos);
    this.servicio_finalizados = this.data.paciente_buscado.servicios.finalizados;
    this.servicios_incompletos = this.data.paciente_buscado.servicios.incompletos;
  }
}
