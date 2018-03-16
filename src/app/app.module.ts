import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ServiciosComponent} from './main_routes/home/main/perfil/serviciosC/inicio.component';
import {RouterModule, Routes} from '@angular/router';
import {PacienteComponent} from './main_routes/paciente/paciente.component';
import {IngresarPacienteComponent} from './ingresar-paciente/ingresar-paciente.component';
import {TabComponent} from './utils/tab/tab.component';
import {TabsComponent} from './utils/tabs/tabs.component';
import {CitasComponent} from './main_routes/home/main/perfil/citas/citas.component';
import {CardServicioComponent} from './card-servicio/card-servicio.component';
import {InputComponent} from './utils/input/input.component';
import {NowComponent} from './utils/now/now.component';
import {LoginComponent} from './main_routes/login/login.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import {SnakbarComponent} from './utils/snakbar/snakbar.component';
import {PagenotfoundComponent} from './utils/pagenotfound/pagenotfound.component';
import {NavbarComponent} from './main_routes/home/main/navbar/navbar.component';
import {DataService} from './services/data.service';
import {MainComponent} from './main_routes/home/main/main.component';
import {PerfilComponent} from './main_routes/home/main/perfil/perfil.component';
import {ConfiguracionesComponent} from './configuraciones/configuraciones.component';
import {MiscComponent} from './misc/misc.component';
import {AnexosComponent} from './anexos/anexos.component';
import {HistoriaComponent} from './historia/historia.component';
import {ResumenComponent} from './resumen/resumen.component';
import {RegistroComponent} from './registro/registro.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {InicioComponent} from './inicio/inicio.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {
    path: '', component: MainComponent, children: [
      {
        path: '', component: InicioComponent,
        path: 'perfil', component: PerfilComponent, children: [
          {path: 'inicio', component: InicioComponent},
          {path: 'servicios', component: ServiciosComponent},
          {path: 'citas', component: CitasComponent}
        ]
      },
      {
        path: 'paciente', component: PacienteComponent, children: [
          {path: 'resumen', component: ResumenComponent},
          {path: 'anexos', component: AnexosComponent},
          {path: 'historia', component: HistoriaComponent},
          {path: 'misc', component: MiscComponent}
        ]
      },
      {path: 'ingreso', component: IngresarPacienteComponent},
      {path: 'configuraciones', component: ConfiguracionesComponent}
    ]
  },
  {path: '**', component: PagenotfoundComponent}
];

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
    MainComponent,
    PerfilComponent,
    ConfiguracionesComponent,
    MiscComponent,
    AnexosComponent,
    HistoriaComponent,
    ResumenComponent,
    RegistroComponent,InicioComponent],

  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule,
    AngularFireAuthModule, FormsModule],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}




