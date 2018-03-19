import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string;
  pass: string;
  nombres: string;
  apellidos: string;
  sexo: string;
  especialidad: string;

  constructor(public db: AngularFireDatabase, private firebaseAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
  }

  pushData() {
    console.log('se presiona!');
    const itemRef = this.db.object('users');
    itemRef.set({name: 'new nombres!'});
    console.log(this.email);


    this.createBasicAccount(this.email, this.pass);
  }

  createBasicAccount(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!');
        this.pushAllNewUserInfo(value);
      })
      .catch(err => {
        console.log('Something went wrong:');
      });
  }

  pushAllNewUserInfo(user: any) {
    const itemRef = this.db.object('users/' + user.uid);
    itemRef.set({email: this.email, nombres: this.nombres, apellidos: this.apellidos, sexo: this.sexo, especialidad: this.especialidad});
    this.router.navigate(['/perfil/inicio']);
  }
}

