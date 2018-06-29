///<reference path="popcard/popcard.component.ts"/>
import {Injectable} from '@angular/core';
import {MainComponent} from './main_routes/home/main/main.component';
import {DataService} from './services/data.service';

@Injectable()
export class PopdateService {
  main_view: MainComponent;
  paginas_data: any = null;
  dataGuardada: any = null;
  cancelar: void;
  editable: boolean;
  public alFinalizar: (n: any) => any;
  public alCancelar: (n: any) => void;
  public ttl: string;
  public subttl: string;

  constructor(public dt: DataService) {
    this.paginas_data = dt.paginas_ingreso;
  }

  // drawPop(ttl: string, subttl: string, estructuraData: any, data_guardada, ActivoParaEditar: boolean,
  //         finalizar: (n: any) => any, cancelar: (n: any) => void): void {
  //   // this.ttl = ttl;
  //   // this.subttl = subttl;
  //   // this.paginas_data = estructuraData;
  //   // this.ActivoParaEditar = ActivoParaEditar;
  //   // this.alFinalizar = finalizar;
  //   // this.alCancelar = cancelar;
  //   // console.log('se inicia el drawpop');
  //   // this.main_view.pCard.iniciarPopCard(data_guardada,);
  // }


  showToast(msg: string) {
    this.main_view.snak.show(msg);
  }
}
