import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-ingresar-paciente',
  templateUrl: './ingresar-paciente.component.html',
  styleUrls: ['./ingresar-paciente.component.css']
})
export class IngresarPacienteComponent implements OnInit {
  nombre: string;
  apellidos: string;
  tipo_doc: string;
  documento: string;

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  finalizarIngreso() {
    const itemRef = this.data.db.object('pacientes/' + this.tipo_doc + '/' + this.documento);
    itemRef.set({nombre: this.nombre, apellidos: this.apellidos, tipo_documento: this.tipo_doc, documento: this.documento});
  }
}
