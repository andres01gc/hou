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
          console.log('¡usuario identificado!');
          this.data.showmenu = true;
          this.getInfoCurrentUser(auth);
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


  getInfoCurrentUser(auth: any) {
    this.db.object('users/' + auth.uid).valueChanges().subscribe(item => {
        console.log(item);
        this.router.navigate(['/perfil/']);
      }
    );
  }
}
