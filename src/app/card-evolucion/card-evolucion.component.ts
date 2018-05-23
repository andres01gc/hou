import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PopdateService} from '../popdate.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-card-evolucion',
  templateUrl: './card-evolucion.component.html',
  styleUrls: ['./card-evolucion.component.css']
})
export class CardEvolucionComponent implements OnInit {
  @Input() id: any;
  @Input() editable: boolean;
  @Input() faseCorrespondiente = 'fase correspondiente';
  @Output() finalizaIngreso = new EventEmitter();
  anexos = [
    {}
  ];

  @Input() ev: any = {
    id: 3,
    ['fase']: this.faseCorrespondiente,
    'Evolución': 'Lorem, esta se supone que es la evolución',
    anexos: []
  };

  constructor(public data: DataService, public popdate: PopdateService) {
  }


  alFinalizarIngreso() {
    this.ev.fecha = new Date().getDate();
    this.finalizaIngreso.emit(this.ev);
  }

  ngOnInit() {
    console.log('el numero de la evolución es ' + this.id);
  }


  verAnexoSeleccionado(anexo: any) {
    const anexoSelected = this.buscarEstructuraAnexosPorNombre(anexo.nombre);
    console.log('se seleccionó ' + anexoSelected.nombre);
    console.log(anexo);

    this.popdate.drawPop(
      anexoSelected.nombre,
      'Nuevo anexo',
      anexoSelected.estructura,
      anexo.data,
      false,
      (data: any): void => {
      },
      (result: any): void => {
      }
    );

    // console.log('se quiere ver el anexo ');
    // console.log(anexo);
    // this.popdate.drawPop(anexo.nombre,
    //   'Nuevo anexo',
    //   this.buscarEstructuraAnexosPorNombre(anexo.nombre),
    //   null,
    //   true,
    //   (estructura: any): void => {
    //   },
    //   (result: any): void => {
    //   }
    // );
  }

  agregarNuevoAnexo(nombreAnexo: string) {
    // aquí se busca en la lista de estructuras, cual de esos corresponde con el seleccionado
    const anexoSelected = this.buscarEstructuraAnexosPorNombre(nombreAnexo);
    console.log('se seleccionó ' + anexoSelected.nombre);
    this.popdate.drawPop(
      anexoSelected.nombre,
      'Nuevo anexo',
      anexoSelected.estructura,
      null,
      true,
      (data: any): void => {
        this.anexos.push();
        this.ev.anexos.push({
          nombre: nombreAnexo,
          data: data
        });
        console.log('se ha agregado un anexo con estructura');
        console.log(this.ev);
      },
      (result: any): void => {
      }
    );
  }

  buscarEstructuraAnexosPorNombre(nombreAnexo: string): any {
    for (let op of this.data.paginas_anexos) {
      if (op.nombre === nombreAnexo) {
        console.log('se enconotró anexo');
        return op;
      }
    }
    console.log('aasdvad');
  }


}
