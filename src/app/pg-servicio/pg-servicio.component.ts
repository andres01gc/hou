import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {PgOdontogramaComponent} from '../pg-odontograma/pg-odontograma.component';
import {NavbarComponent} from '../main_routes/home/main/navbar/navbar.component';
import {Router} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-pg-servicio',
  templateUrl: './pg-servicio.component.html',
  styleUrls: ['./pg-servicio.component.css']
})
export class PgServicioComponent implements OnInit {
  verAdv = false;
  cancelar = false;
  reasignar = false;
  evolucionar = false;
  evoluciones: any = [];

  constructor(public router: Router, public data: DataService, public db: AngularFireDatabase) {
    this.traerEvoluciones();
  }

  traerEvoluciones() {
    console.log(this.data.servicio_seleccionado_paciente.payload.val().id);
    this.db.list('servicios/' + this.data.servicio_seleccionado_paciente.payload.val().id + '/evoluciones').snapshotChanges().subscribe(evoluciones => {
        this.evoluciones = evoluciones;
        // invierto el array, para mostrar las nuevas evoluciones de primero
        // this.evoluciones.reverse();
      }
    );
  }

  ngOnInit() {
  }

  iniciarHistoria() {
    this.verAdv = false;
    this.router.navigate(['servicio/ingreso_historia']);
  }


  mostrarAdv() {
    this.verAdv = true;
  }

  evolucionarServicio() {
    this.evolucionar = true;
  }

  subirEvolucion(evolucion_escrita: any) {
    console.log('evolucion!');
    console.log(evolucion_escrita);
    this.data.db.list('servicios/' + this.data.servicio_seleccionado_paciente.payload.val().id + '/evoluciones').push(evolucion_escrita);
  }
}
