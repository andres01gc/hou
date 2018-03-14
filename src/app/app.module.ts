import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ActividadComponent} from './mainroutes/inicio/inicio.component';
import {RouterModule, Routes} from '@angular/router';
import {PacienteComponent} from './mainroutes/paciente/paciente.component';
import {IngresarPacienteComponent} from './mainroutes/ingresar-paciente/ingresar-paciente.component';
import {TabComponent} from './utils/tab/tab.component';
import {TabsComponent} from './utils/tabs/tabs.component';
import {CitasComponent} from './citas/citas.component';
import {CardServicioComponent} from './card-servicio/card-servicio.component';
import {InputComponent} from './utils/input/input.component';
import {NowComponent} from './now/now.component';
import {LoginComponent} from './login/login.component';
import {AngularFireModule} from 'angularfire2';

const appRoutes: Routes = [
  {path: 'paciente', component: PacienteComponent},
  {path: 'nuevo_ingreso', component: IngresarPacienteComponent},
  {path: 'inicio', component: ActividadComponent}
];

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDFT7LjA-MoKUWIWF4fbD_ZlyjWyT0GB1g',
  authDomain: 'hou-db.firebaseapp.com',
  databaseURL: 'https://hou-db.firebaseio.com',
  projectId: 'hou-db',
  storageBucket: 'hou-db.appspot.com',
  messagingSenderId: '874497143789'
};


@NgModule({
  declarations: [
    AppComponent,
    ActividadComponent,
    PacienteComponent,
    IngresarPacienteComponent,
    TabComponent,
    TabsComponent,
    CitasComponent,
    CardServicioComponent,
    InputComponent,
    NowComponent,
    LoginComponent],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


