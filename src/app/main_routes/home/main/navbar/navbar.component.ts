import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DataService} from '../../../../services/data.service';
import {Router} from '@angular/router';
import {SnakbarComponent} from '../../../../utils/snakbar/snakbar.component';
import {AngularFireDatabase} from 'angularfire2/database';
import {PopdateService} from '../../../../popdate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  active = false;
  private mostrarIngreso = true;
  today = Date.now();
  @Output() presiona_ingresar = new EventEmitter();
  @ViewChild(SnakbarComponent)
  private snak: SnakbarComponent;

  constructor(private db: AngularFireDatabase, public data: DataService, private router: Router, public popdate: PopdateService) {
    this.active = data.showmenu;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  buscar(event: any) {
    this.data.documento_paciente_buscado = (<HTMLInputElement>event.target).value;
    // TODO ya se utiliza el select para seleccionar el tipo de doc, pero por orde, deberia de llegar por parametro
    // this.data.tipo_doc_paciente_buscado = 'CC';
    this.db.object('pacientes/' + this.data.tipo_doc_paciente_buscado +
      '/' + this.data.documento_paciente_buscado).valueChanges().subscribe(item => {
        // console.log('testing');
        // console.log(item);
        if (item != null) {
          this.data.info_paciente_buscado = item;
          this.router.navigate(['/paciente']);
        } else {
          this.popdate.showToast('Documento de paciente no encontrado.');
        }
      }
    );
  }

  finalizarIngreso() {
    this.snak.show('¡Ingreso exitoso! ;)');
    this.mostrarIngreso = false;
  }

  initIngreso() {
    this.mostrarIngreso = true;
    this.presiona_ingresar.emit(true);
  }

}
