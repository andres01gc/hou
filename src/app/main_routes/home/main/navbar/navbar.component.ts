import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../../../services/data.service';
import {Router} from '@angular/router';
import {SnakbarComponent} from '../../../../utils/snakbar/snakbar.component';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  active = false;
  private mostrarIngreso = false;
  today = Date.now();

  @ViewChild(SnakbarComponent)
  private snak: SnakbarComponent;

  constructor(private db: AngularFireDatabase, public data: DataService, private router: Router) {
    this.active = data.showmenu;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  buscar(event: any) {
    this.data.documento_paciente_buscado = (<HTMLInputElement>event.target).value;
    // TODO POR AHORA, LAS BUSQUEDAS SOLO FUNCIONAN PARA CÉDULAS
    this.db.object('pacientes/CC/' + this.data.documento_paciente_buscado).valueChanges().subscribe(item => {
        console.log('testing');
        console.log(item);
        if (item != null) {
          this.data.info_paciente_buscado = item;
          this.router.navigate(['/paciente']);
        } else {
          this.snak.show('Documento de paciente no encontrado.');
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
  }

}
