import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {PopdateService} from '../../../popdate.service';
import {SnakbarComponent} from '../../../utils/snakbar/snakbar.component';
import {PopcardComponent} from '../../../popcard/popcard.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mostrarIngreso = false;
  estructura_ingreso: any[];


  @ViewChild(SnakbarComponent)
  public snak: SnakbarComponent;

  @ViewChild(PopcardComponent)
  public pCard: PopcardComponent;

  constructor(public data: DataService, public popdate: PopdateService, public router: Router) {
    this.popdate.main_view = this;
    this.traerInfoHistoria();
  }

  ejecutarIngreso() {
    // TODO construir un metodo general para llamar un pop_card
    // en el primer parametro se le envia el array correspondiente al componente a pintar
    this.popdate.main_view.pCard.iniciarPopUp(
      'Nuevo Ingreso de paciente',
      'Ingresado por' + this.data.nombres + ' ' + this.data.apellidos, this.data.paginas_ingreso,
      null,
      true,
      (data: any): void => {
        // Esta parte no la puedo hacer general, debo saber la posición del documento y su tipo para poder crear el nuevo usuario
        console.log('llega al finalizar del pop');
        console.log(data);
        const itemHistoriaUsuario = this.data.db.object('pacientes/' +
          data['Información General']['Identidad']['Tipo_doc'] + '/' +
          data['Información General']['Identidad']['Documento']);
        itemHistoriaUsuario.set({'historia': data, 'metadata': {fecha_ingreso: new Date().getDate()}});
        this.mostrarIngreso = false;
        console.log('¡Ingreso existoso!');
        this.popdate.showToast('¡Ingreso existoso!');


        this.data.documento_paciente_buscado = (<HTMLInputElement>event.target).value;
        // TODO ya se utiliza el select para seleccionar el tipo de doc, pero por orde, deberia de llegar por parametro
        // this.data.tipo_doc_paciente_buscado = 'CC';

        this.data.db.object('pacientes/' +
          data['Información General']['Identidad']['Tipo_doc'] + '/' +
          data['Información General']['Identidad']['Documento']).valueChanges().subscribe(item => {

            this.data.info_paciente_buscado = item;
            console.log(this.data.info_paciente_buscado);
            this.router.navigate(['/paciente']);

          }
        );

      },
      (result: any): void => {
        this.snak.show('Se ha cancelado el ingreso');
      }
    );
  }


  ngOnInit() {
    // this.mostrarIngreso = false;
  }

  traerInfoHistoria() {
    // linea para subir la información de la historia.
    // this.estructura.db.object('informacion_categorias').set(this.estructura.paginas_ingreso);
    //  this.estructura.informacion_categorias = this.estructura.paginas_ingreso;
    //   console.log('test');
    // this.estructura_ingreso = ;
    // this.estructura.db.list('informacion_categorias').valueChanges().subscribe(item => {
    //   this.estructura_ingreso = item;
    // });
  }

  cancelarP($event: any) {
    this.mostrarIngreso = false;
  }

  finalizarP($event: any) {
    this.mostrarIngreso = false;
  }
}
