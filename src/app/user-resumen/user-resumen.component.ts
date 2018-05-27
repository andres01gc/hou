import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-user-resumen',
  templateUrl: './user-resumen.component.html',
  styleUrls: ['./user-resumen.component.css']
})
export class UserResumenComponent implements OnInit {
  nombre = 'Andrés Gc';
  ocultarAdvertencia = true;
  serviciosId = [];
  iSelected: number;

  constructor(public router: Router, public data: DataService, public db: AngularFireDatabase) {
    this.obtenerServiciosAsignados();
  }

  ngOnInit() {
  }

  verAdv() {
    this.ocultarAdvertencia = false;
  }

  verServicio(serv: any) {
    // le paso el servicio al componente


    this.data.servicio_seleccionado_paciente = serv;
    this.ocultarAdvertencia = true;
    this.router.navigate(['/servicio']);
  }

  asignar_cita() {
    // this.ocultarAdvertencia = true;
    // this.router.navigate(['/servicio']);
  }

  obtenerServiciosAsignados() {
    // TODO se debe buscar los serviciosId propios del usuaario, para pruebas se seleccionarán todos los serviciosId sin asignar
    this.db.list('usuarios/' + this.data.current_uid + '/data/servicios_asignados/').valueChanges().subscribe(servicios => {
        this.serviciosId = servicios;
        console.log('los servicios: ');
      }
    );
  }

  selectServicio(servicioSeleccionado: any, i: number) {
    this.data.servicio_seleccionado_paciente = servicioSeleccionado;
    this.iSelected = i;
    console.log('se selecciona el puto servicio');
    console.log(servicioSeleccionado.metadata.id);
    this.data.id_servicio_seleccionado = servicioSeleccionado.metadata.id;
    this.router.navigate(['/servicio']);
  }
}
