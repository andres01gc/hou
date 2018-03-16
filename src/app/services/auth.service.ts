import {Injectable} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {DataService} from './data.service';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  firebaseAuth: AngularFireAuth;

  constructor(private fireauth: AngularFireAuth, private router: Router, private data: DataService) {
    this.user = fireauth.authState;
    this.firebaseAuth = fireauth;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
