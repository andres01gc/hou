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
  servicios = [];

  constructor(public router: Router, public data: DataService, public db: AngularFireDatabase) {
    this.obtenerServicioSeleccionado();
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

  obtenerServicioSeleccionado() {
    // TODO se debe buscar los servicios propios del usuaario, para pruebas se seleccionarán todos los servicios sin asignar
    this.db.list('usuarios/' + this.data.current_uid + '/servicios_id').snapshotChanges().subscribe(servicios => {
      this.servicios = servicios;
            //  se debe entrar a payload.val para poder, ver la sub_categorias, la metadata estará en .key, de cada objeto del array
      }
    );
  }
}
