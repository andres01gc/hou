import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ActividadComponent} from './mainroutes/actividad/actividad.component';
import {RouterModule, Routes} from '@angular/router';
import {PacienteComponent} from './mainroutes/paciente/paciente.component';
import {IngresarPacienteComponent} from './mainroutes/ingresar-paciente/ingresar-paciente.component';

const appRoutes: Routes = [
  {path: 'paciente', component: PacienteComponent},
  {path: 'nuevo_ingreso', component: IngresarPacienteComponent},
  {path: 'inicio', component: ActividadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ActividadComponent,
    PacienteComponent,
    IngresarPacienteComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


