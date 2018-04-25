import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-servicios-paciente',
  templateUrl: './servicios-paciente.component.html',
  styleUrls: ['./servicios-paciente.component.css']
})
export class ServiciosPacienteComponent implements OnInit {
  servicios_activos: any;
  servicio_finalizados: any;
  servicios_incompletos: any;

  constructor(public db: AngularFireDatabase, public data: DataService) {
    this.organizarServicios();
  }

  ngOnInit() {
  }

  organizarServicios() {
    // deberia de ser servicios activos!
    this.db.list('pacientes/CC/' + this.data.documento_paciente_buscado + '/servicios').snapshotChanges().subscribe(servicios => {
      this.servicios_activos = servicios;
    });

    // console.log('Servicios Activos');
    // console.log(this.servicios_activos);
    // this.servicio_finalizados = this.data.paciente_buscado.servicios.finalizados;
    // this.servicios_incompletos = this.data.paciente_buscado.servicios.incompletos;
  }
}
