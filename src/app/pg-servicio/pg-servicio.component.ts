import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {PgOdontogramaComponent} from '../pg-odontograma/pg-odontograma.component';
import {NavbarComponent} from '../main_routes/home/main/navbar/navbar.component';
import {Router} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {PopdateService} from '../popdate.service';

@Component({
  selector: 'app-pg-servicio',
  templateUrl: './pg-servicio.component.html',
  styleUrls: ['./pg-servicio.component.css']
})
export class PgServicioComponent implements OnInit {
  // variable encargada contener todoa la información del servicio
  servicio: any;
  verAdv = false;
  cancelar = false;
  reasignar = false;
  evolucionar = false;
  evoluciones: any = [];
  tratamientos: any = [];

  constructor(public router: Router, public data: DataService, public db: AngularFireDatabase, public popdate: PopdateService) {
    this.cargarServicio();
  }

  ngOnInit() {
  }

  ejecutarAgregarNuevoTratamiento() {
    this.popdate.drawPop(
      'Agregar nuevo Tratamiento',
      'Fase asdv ',
      this.data.paginas_tratamiento,
      null,
      true,
      (data: any): void => {
        // agregar datos al servicios seleccionado

        const nTratamiento = {
            data: data,
            metadata: {
              nombre: 'Fase higienica',
              estado: 'Activo',
              id_servicio_perteneciente: this.data.id_servicio_seleccionado
            }
          }
        ;
        var k = this.data.db.list('tratamientos/').push(nTratamiento).key;
        this.data.db.list('servicios/' + this.data.id_servicio_seleccionado + '/tratamientos').push(nTratamiento);

        console.log('se guarda el nuevo tratamiento');
        this.cargarServicio();
      },
      (result: any): void => {
      }
    );
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

  cargarServicio() {
    this.data.db.object('servicios/' + this.data.id_servicio_seleccionado).valueChanges().subscribe(item => {
      console.log('se trajo el siguiente servicio:');
      this.servicio = item;
      console.log(item);
    });

    this.data.db.list('servicios/' + this.data.id_servicio_seleccionado + '/tratamientos').valueChanges().subscribe(item => {
      console.log('se trajo los siguientes tratamientos:');
      this.tratamientos = item;
      console.log(item);
    });
  }
}
