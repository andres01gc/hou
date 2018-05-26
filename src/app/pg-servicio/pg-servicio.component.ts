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
  tratamientos_id: any = [];
  tratamientos_del_servicio: any[] = [];
  servicio_concluido = false;

  constructor(public router: Router, public data: DataService, public db: AngularFireDatabase, public popdate: PopdateService) {
    this.cargarServicio();
  }

  ngOnInit() {
  }

  ejecutarAgregarNuevaFaseTratamiento(faseSelected: string) {
    console.log('se seleccionó una fase');
    var paginasSeleccionadas: any[] = [];
    for (let pFase of this.data.paginas_fases) {
      if (pFase.nombre === faseSelected) {
        console.log('se encontró una fase!');
        paginasSeleccionadas = pFase.estructura;
        break;
      }
    }

    this.popdate.main_view.pCard.iniciarPopUp(
      'Nueva' + faseSelected,
      'ingresado por XXXX',
      paginasSeleccionadas,
      null,
      true,
      (data: any): void => {
        // agregar datos al servicios seleccionado
        const nTratamiento = {
          data: data,
          metadata: {
            nombre: faseSelected,
            estado: 'Activo',
            id_servicio_perteneciente: this.data.id_servicio_seleccionado,
            fecha_creacio: new Date()
          }
        };
        const k = this.data.db.list('servicios/' + this.data.id_servicio_seleccionado + '/tratamientos').push(nTratamiento).key;
        var t: any = nTratamiento;
        t.metadata.id = {};
        t.metadata.id = k;
        this.data.db.object('servicios/' + this.data.id_servicio_seleccionado + '/tratamientos/' + k).set(t);
        console.log('se guarda el nuevo tratamiento');
        this.cargarServicio();
      },
      (result: any): void => {
      }
    );
  }


  ejecutarVerServicio() {
    this.popdate.main_view.pCard.iniciarPopUp(
      'Nombre del servicio que se está viendo',
      'Personita que se está viendo',
      this.data.paginas_servicio,
      this.servicio.data,
      !this.servicio_concluido,
      (data: any): void => {
        // agregar datos al servicios seleccionado
        this.data.db.object('servicios/' + this.data.id_servicio_seleccionado).update(data);
      },
      (result: any): void => {
      }
    );
  }

  mostrarAdv() {
    this.verAdv = true;
  }

  cargarServicio() {
    this.data.db.object('servicios/' + this.data.id_servicio_seleccionado).valueChanges().subscribe(item => {
      console.log('se trajo el siguiente servicio:');
      this.servicio = item;
      console.log(item);

      if (this.servicio.metadata.estado !== 'Activo') {
        this.servicio_concluido = true;
      }
    });

    this.cargarTratamientos();
  }

  cargarTratamientos() {
    this.data.db.list('servicios/' + this.data.id_servicio_seleccionado + '/tratamientos').valueChanges().subscribe(item => {
      console.log('se trajo los siguientes objectos tratamientos');
      this.tratamientos_del_servicio = item;
      // console.log(this.tratamientos_del_servicio);
    });
  }

  finaliarServicio() {
    this.data.db.object('servicios/' + this.data.id_servicio_seleccionado + '/metadata/estado').set('Cerrado');
    this.router.navigate(['paciente/']);
    this.cargarServicio();
  }
}
