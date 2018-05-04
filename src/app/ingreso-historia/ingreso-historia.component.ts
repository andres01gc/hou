import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-ingreso-historia',
  templateUrl: './ingreso-historia.component.html',
  styleUrls: ['./ingreso-historia.component.css']
})
export class IngresoHistoriaComponent implements OnInit {
  historia: any;

  // @ViewChild(HcRequerimientosComponent) requerimientos_paciente: HcRequerimientosComponent;
  constructor(public router: Router, public data: DataService, public db: AngularFireDatabase) {
    console.log('Los siguientes errores se producen porque el componente carga más rapido que lo que se demora en traer los datos.');
    console.log('solucionable con una página de cargando');
    this.buscarHistoriaDelPacienteDelServicio();
  }

  ngOnInit() {
  }

  // ingresarHistoria() {
  //   // subo el servicio general
  //   const itemHistoriaUsuario = this.data_pag.db.object('pacientes/' + this.basicComponent.data_pag.identidad.tipo_documento + '/' +
  //     this.basicComponent.data_pag.identidad.documento);
  //   //  se actualiza la información de toooda la  historia,
  //   itemHistoriaUsuario.update({
  //     historia: {
  //       info_basica: this.basicComponent.data_pag,
  //       revision_sistema: this.revision_sistema.data_pag,
  //       odontograma: this.odontograma.data_pag,
  //       examen_fisico: this.examen_fisico.data_pag
  //       // requerimientos_paciente: this.requerimientos_paciente.sub_categorias,
  //     },
  //     metadata: {historia: true}
  //   });
  //   this.actualizarServicio();
  //   this.router.navigate(['servicio']);
  // }

  actualizarServicio() {
    const item = this.data.db.object('servicios/' + this.data.servicio_seleccionado_paciente.payload.val().id + '/metadata');
    item.update({inicio_historia: true});
  }

  buscarHistoriaDelPacienteDelServicio() {
    // console.log(this.sub_categorias.servicio_seleccionado_paciente);
    const tipo_doc = this.data.servicio_seleccionado_paciente.payload.val().metadata.tipo_doc;
    const doc = this.data.servicio_seleccionado_paciente.payload.val().metadata.documento;
    this.db.object('pacientes/CC/789/historia').snapshotChanges().subscribe(historia => {
      console.log('buscando la pinche info del usuario');
      this.historia = historia.payload.val();
    });

  }

  // obtenerServicioSeleccionado() {
  //   // TODO se debe buscar los servicios propios del usuaario, para pruebas se seleccionarán todos los servicios sin asignar
  //   this.db.list('usuarios/' + this.sub_categorias.current_uid + '/servicios_activos').snapshotChanges().subscribe(servicios => {
  //       this.servicios = servicios;
  //       //  se debe entrar a payload.val para poder, ver la sub_categorias, la metadata estará en .key, de cada objeto del array
  //     }
  //   );
  // }

}
