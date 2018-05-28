import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {PopdateService} from '../popdate.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  tels: any = [];
  historia: any;

  constructor(private data: DataService, public popdate: PopdateService) {
    console.log('testing pg hc');
    this.historia = this.data.info_paciente_buscado.historia;
    console.log(this.historia);
  }

  ngOnInit() {
  }

  presionarIngresarServicio() {
    console.log('se intenta agregar un nuevo servicio a un paciente');
    this.popdate.main_view.pCard.iniciarPopUp(
      'Nuevo Servicio',
      'Servicio creado por xxxxxxx',
      this.data.paginas_servicio,
      null,
      true,
      (data: any): void => {
        // ahí irá this.data.current_uid

        // TODO buscar los datos especificos de cada input, cuando tenga las estructuras de las páginas;
        const servicio = {
          data: data,
          metadata: {
            estado: 'Activo',
            tipo_servicio: 'ni idea aún',
            nombre: 'nombre servicio',
            diagnostico: 'aquí ira la información dianogstico',
            tipo_doc: this.data.tipo_doc_paciente_buscado,
            documento: this.data.documento_paciente_buscado,
            fecha: 'null',
            info_creador: {
              user_uid: this.data.current_uid,
              nombre: 'Andrés Gc',
              prof: 'Code master',
            }
          }
        };

        console.log('se crea el nuevo servcio');
        // subo y obtengo la key de ese servicio general
        const id = this.data.db.list('servicios').push(servicio).key;
        // console.log('se sube el servicio y se obtiene la key ' + id);
        // subo el servicio al usuario,
        this.data.db.list('pacientes/' + this.data.tipo_doc_paciente_buscado + '/'
          + this.data.documento_paciente_buscado + '/servicios').push(id);

        this.popdate.showToast('nuevo servicio ingresado');
        this.data.db.list('usuarios/' + this.data.current_uid + '/data/servicios_asignados/').push(id);
      },
      (result: any): void => {
      }
    );
  }

  getAnos(): string {
    const as = (new Date().valueOf());
    const bd = new Date(this.historia['Información General']['Identidad']['Nacimiento']).valueOf();
    const edad = Math.trunc(((as - bd) / (1000 * 60 * 60 * 24 * 365)));
    return edad + ' años';
  }

}

