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
  private mostrarIngreso = true;
  today = Date.now();

  @ViewChild(SnakbarComponent)
  private snak: SnakbarComponent;

  constructor(private db: AngularFireDatabase, private data: DataService, private router: Router) {
    this.active = data.showmenu;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  buscar(event: any) {
// TODO POR AHORA, LAS BUSQUEDAS SOLO FUNCIONAN PARA CÉDULAS
    this.db.object('pacientes/cc/' + (<HTMLInputElement>event.target).value).valueChanges().subscribe(item => {
        if (item != null) {
          console.log(item);
          this.data.paciente_buscado = item;
          this.router.navigate(['/paciente']);
        } else {
          this.snak.show('Documento de paciente no encontrado.');
        }
      }
    );
  }

  initIngreso() {
    this.mostrarIngreso = true;
  }
}
