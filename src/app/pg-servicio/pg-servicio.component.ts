import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {PopdateService} from '../popdate.service';
import {ReasignarCitaComponent} from '../reasignar-cita/reasignar-cita.component';
import {AsignarComponent} from '../asignar-cita/asignar.component';
import {CancelarServicioComponent} from '../cancelar-servicio/cancelar-servicio.component';
import {Location} from '@angular/common';

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
  tratamientos_del_servicio: any[] = [];
  servicio_concluido = false;
  userIsCreator = false;

  @ViewChild(AsignarComponent)
  public asigComp: AsignarComponent;

  @ViewChild(CancelarServicioComponent)
  public canComp: CancelarServicioComponent;

  @ViewChild(ReasignarCitaComponent)
  public reasgnComp: ReasignarCitaComponent;

  servicioConCita: boolean;

  constructor(public router: Router, public data: DataService, public db: AngularFireDatabase, public popdate: PopdateService, public location: Location) {
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
      'Ingresado por' + this.data.nombres + ' ' + this.data.apellidos,
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
      'Ingresado por' + this.data.nombres + ' ' + this.data.apellidos,
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

      if (this.servicio.metadata.fecha === 'null') {
        this.servicioConCita = false;
      } else {
        this.servicioConCita = true;
      }

      // funcionaará cuando loguee
      if (this.servicio.metadata.info_creador.user_ud === this.data.current_uid) {
        console.log('el usuario que visita, es el creador del propio servicio');
        this.userIsCreator = true;
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
    this.location.back();
    this.cargarServicio();
  }

  ejecutarNuevaCita() {
    this.asigComp.iniciar(
      value => {
        console.log(value);
        console.log('se asiggnó cita');
        this.data.db.object('servicios/' + this.data.id_servicio_seleccionado + '/metadata/fecha').set(value);
        this.popdate.showToast('Se ha asignado una nueva cita');

      },
      value => {
        // console.log('se agregó una cita');
      }
    );
  }

  ejecutarCancelarCita() {
    this.canComp.iniciar(
      value => {
        console.log(value);
        console.log('se asiggnó cita');
        this.data.db.object('servicios/' + this.data.id_servicio_seleccionado + '/metadata/fecha').set('null');
        this.popdate.showToast('Se ha cancelado la cita asignada');
      },
      value => {
        console.log('se canceló una cita');
      }
    );
  }

  ejecutarReasignarCita() {
    this.canComp.iniciar(
      value => {
        console.log(value);
        console.log('se asiggnó cita');
        this.data.db.object('servicios/' + this.data.id_servicio_seleccionado + '/metadata/fecha').set('null');
      },
      value => {
        console.log('se canceló una cita');
      }
    );
  }
}
