import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  }
)

export class LoginComponent implements OnInit {
  snacktive = false;
  msg = 'jojo';

  constructor(private db: AngularFireDatabase, public authService: AuthService, private router: Router, private data: DataService) {
  }

  ngOnInit() {
  }

  login(email: string, pass: string) {
    this
      .authService
      .firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, pass)
      .then(auth => {
          console.log('usuario encontrado');
          this.obtenerInfoUsuario(auth);
          this.data.showmenu = true;
        }
      )
      .catch(err => {
        console.log(err);
        if (err.code.indexOf('auth/user-not-found') >= 0) {
          this.msg = 'Parece que ese usuario no existe... :/';
        }
        if (err.code.indexOf('auth/wrong-password') >= 0) {
          this.msg = 'parece que la contraseña es incorrecta.';
        }
        this.snacktive = !this.snacktive;
        setTimeout(() => this.snacktive = !this.snacktive, 4000);
      });
  }

  obtenerInfoUsuario(auth: any) {
    // console.log(auth);
    this.data.current_uid = auth.uid;
    console.log(auth.uid);
    this.db.object('usuarios/' + auth.uid).valueChanges().subscribe(item => {
        console.log('se encuentra información');
        this.data.informacion_usuario = item;
        this.data.nombres = this.data.informacion_usuario.nombres;
        this.data.apellidos = this.data.informacion_usuario.apellidos;
        this.router.navigate(['/']);
      }
    );
  }
}
