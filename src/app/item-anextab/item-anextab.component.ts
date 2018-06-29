import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DataService} from '../services/data.service';
import {PopdateService} from '../popdate.service';

@Component({
  selector: 'app-item-anextab',
  templateUrl: './item-anextab.component.html',
  styleUrls: ['./item-anextab.component.css']
})
export class ItemAnextabComponent implements OnInit, OnChanges {
  @Output() alAgregar = new EventEmitter();
  @Output() alActualizarTratamientos = new EventEmitter();
  isTratamientoSeleccionado = false;
  @Input() tratamientos: any[] = [];
  public tratamientoSeleccinado: any;
  @Input() isLock;
  evoluciones: any[] = [];
  verNuevaEvolucion = false;
  permitirEditarUltima = false;

  constructor(public data: DataService, public popdate: PopdateService) {
  }

  ngOnInit() {
    // this.cargarInfoTratamientos();
  }

  verTratamientoSeleccionado(tratamientoSeleccionado) {
    this.tratamientoSeleccinado = tratamientoSeleccionado;
    if (this.tratamientoSeleccinado.metadata.estado === 'Finalizado') {
      // this.isLock = true;
      this.verNuevaEvolucion = false;
      this.permitirEditarUltima = false;
    } else {
      this.verNuevaEvolucion = true;
      this.permitirEditarUltima = true;
    }
    this.traerEvoluciones();
    this.isTratamientoSeleccionado = true;
  }

  verDetallesTratamientos() {

    var paginasSeleccionadas: any[] = [];
    for (const pFase of this.data.paginas_fases) {
      if (pFase.nombre === this.tratamientoSeleccinado.metadata.nombre) {
        console.log('se encontró una fase!');
        paginasSeleccionadas = pFase.estructura;
        break;
      }
    }
    this.popdate.main_view.pCard.iniciarPopUp('Detalles' + this.tratamientoSeleccinado.nombre,
      this.tratamientoSeleccinado.metadata.nombre,
      paginasSeleccionadas,
      this.tratamientoSeleccinado.data,
      true,
      (data: any): void => {
      },
      (result: any): void => {
      }
    );
  }

  agregarEvolucionATratamiento(evolucion: any) {
    console.log('se intenta agregar evolución al tratatmiento');
    const k = this.data.db.list('tratamientos/' + this.tratamientoSeleccinado.metadata.id + '/evoluciones').push(evolucion).key;
    evolucion.id = k;
    this.data.db.object('tratamientos/' + this.tratamientoSeleccinado.metadata.id + '/evoluciones/' + k).update(evolucion);
    this.verNuevaEvolucion = false;
  }

  actualizarEvolucion(evolucion: any, i: number) {
    console.log('se intente actualizar la evolución');
    console.log(evolucion);
    this.data.db.object('tratamientos/' + this.tratamientoSeleccinado.metadata.id + '/evoluciones/' + evolucion.id).update(evolucion);
  }

  traerEvoluciones() {
    this.evoluciones = [];
    this.data.db.list('tratamientos/' + this.tratamientoSeleccinado.metadata.id + '/evoluciones').valueChanges().subscribe(value => {
      this.evoluciones = value;
      console.log(this.evoluciones);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // this.cargarInfoTratamientos();
  }

  finalizarTratamiento() {
    this.data.db.object('servicios/' + this.data.id_servicio_seleccionado + '/tratamientos/' + this.tratamientoSeleccinado.metadata.id + '/metadata/estado').set('Finalizado');
    this.isTratamientoSeleccionado = false;
    this.alActualizarTratamientos.emit(true);
  }
}
