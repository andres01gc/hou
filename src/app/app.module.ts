import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ServiciosComponent} from './mainroutes/inicio/inicio.component';
import {RouterModule, Routes} from '@angular/router';
import {PacienteComponent} from './mainroutes/paciente/paciente.component';
import {IngresarPacienteComponent} from './mainroutes/ingresar-paciente/ingresar-paciente.component';
import {TabComponent} from './utils/tab/tab.component';
import {TabsComponent} from './utils/tabs/tabs.component';
import {CitasComponent} from './citas/citas.component';
import {CardServicioComponent} from './card-servicio/card-servicio.component';
import {InputComponent} from './utils/input/input.component';
import {NowComponent} from './utils/now/now.component';
import {LoginComponent} from './mainroutes/login/login.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import {SnakbarComponent} from './utils/snakbar/snakbar.component';
import {PagenotfoundComponent} from './utils/pagenotfound/pagenotfound.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DataService} from './services/data.service';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  // { path: 'test',   redirectTo: '/login',  pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: '',
        component: ServiciosComponent
      },
      {
        path: 'citas',
        component: CitasComponent
      }
    ]
  }
  , {path: 'login', component: LoginComponent},
  {
    path: 'bb',
    outlet: 'bar',
    component: NavbarComponent
  },  // {path: 'paciente', component: PacienteComponent},
  // {path: 'nuevo_ingreso', component: IngresarPacienteComponent},
  {path: '**', component: PagenotfoundComponent}
];

// { path: 'home',  component: HomeComponent },
// { path: 'login',  component: LoginComponent, outlet:'main' }

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDFT7LjA-MoKUWIWF4fbD_ZlyjWyT0GB1g',
    authDomain: 'hou-db.firebaseapp.com',
    databaseURL: 'https://hou-db.firebaseio.com',
    projectId: 'hou-db',
    storageBucket: 'hou-db.appspot.com',
    messagingSenderId: '874497143789'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    PacienteComponent,
    IngresarPacienteComponent,
    TabComponent,
    TabsComponent,
    CitasComponent,
    CardServicioComponent,
    InputComponent,
    NowComponent,
    LoginComponent,
    SnakbarComponent,
    PagenotfoundComponent,
    NavbarComponent,
    HomeComponent],

  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, FormsModule],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}




