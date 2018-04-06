import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ServiciosComponent} from './main_routes/home/main/perfil/serviciosC/inicio.component';
import {RouterModule, Routes} from '@angular/router';
import {PacienteComponent} from './main_routes/paciente/paciente.component';
import {IngresarPacienteComponent} from './ingresar-paciente/ingresar-paciente.component';
import {CitasComponent} from './main_routes/home/main/perfil/citas/citas.component';
import {CardServicioComponent} from './main_routes/home/main/perfil/serviciosC/card-servicio/card-servicio.component';
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
import {SelectComponent} from './utils/select/select.component';
import {ServiciosPacienteComponent} from './servicios-paciente/servicios-paciente.component';
import {PgOdontogramaComponent} from './pg-odontograma/pg-odontograma.component';
import {PgServicioComponent} from './pg-servicio/pg-servicio.component';
import {TabsComponent} from './tabs/tabs.component';
import {TabComponent} from './tab/tab.component';
import {InfoSujetoComponent} from './info-sujeto/info-sujeto.component';
import {HcBasicComponent} from './historia/hc-pages/hc-basic/hc-basic.component';
import {ItemTelComponent} from './item-tel/item-tel.component';
import {HcAnamnesisComponent} from './historia/hc-pages/hc-anamnesis/hc-anamnesis.component';
import {HcAntecedentesComponent} from './historia/hc-pages/hc-antecedentes/hc-antecedentes.component';
import {HcHabitosComponent} from './historia/hc-pages/hc-habitos/hc-habitos.component';
import {HcRevisionPorSistemComponent} from './historia/hc-pages/hc-revision-por-sistem/hc-revision-por-sistem.component';
import {HcExamenFisicoComponent} from './historia/hc-pages/hc-examen-fisico/hc-examen-fisico.component';
import {HcExamenFisicoCrnfacialComponent} from './historia/hc-pages/hc-examen-fisico-crnfacial/hc-examen-fisico-crnfacial.component';
import {HcExamenEstomatologicoComponent} from './historia/hc-pages/hc-examen-estomatologico/hc-examen-estomatologico.component';
import {HcPeriodontogramaComponent} from './historia/hc-pages/hc-periodontograma/hc-periodontograma.component';
import {HcExamenPeriodontalComponent} from './historia/hc-pages/hc-examen-periodontal/hc-examen-periodontal.component';
import {HcDescripcionRadiograficaComponent} from './historia/hc-pages/hc-descripcion-radiografica/hc-descripcion-radiografica.component';
import {HcDiagnosticoComponent} from './historia/hc-pages/hc-diagnostico/hc-diagnostico.component';
import {HcDiagnosticoPorDienteComponent} from './historia/hc-pages/hc-diagnostico-por-diente/hc-diagnostico-por-diente.component';
import {HcTratamientoComponent} from './historia/hc-pages/hc-tratamiento/hc-tratamiento.component';
import {HcConsentimientoComponent} from './historia/hc-pages/hc-consentimiento/hc-consentimiento.component';
import {ItemReferenciaComponent} from './item-referencia/item-referencia.component';
import { CntComponent } from './cnt/cnt.component';
import { ItemDirComponent } from './item-dir/item-dir.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {
    path: '', component: MainComponent, children: [
      {
        path: '', component: InicioComponent
      }, {
        path: 'perfil', component: PerfilComponent, children: [
          {path: 'inicio', component: InicioComponent},
          {path: 'servicios', component: ServiciosComponent},
          {path: 'citas', component: CitasComponent}
        ]
      },
      {
        path: 'paciente', component: PacienteComponent, children: [
          {
            path: '',
            component: ServiciosPacienteComponent
          },
          {path: 'resumen', component: ResumenComponent, pathMatch: 'full'},
          {path: 'anexos', component: AnexosComponent},
          {
            path: 'historia', component: HistoriaComponent, children: [
              {path: 'basico', component: HcBasicComponent},
              {path: 'anamnesis', component: HcAnamnesisComponent},
              {path: 'antecedentes', component: HcAntecedentesComponent},
              {path: 'habitos', component: HcHabitosComponent},
              {path: 'revision-sistema', component: HcRevisionPorSistemComponent},
              {path: 'ex-fisico', component: HcExamenFisicoComponent},
              {path: 'ex-fisico-craneofacial', component: HcExamenFisicoCrnfacialComponent},
              {path: 'ex-estomatologico', component: HcExamenEstomatologicoComponent},
              {path: 'odontograma', component: PgOdontogramaComponent},
              {path: 'periodontograma', component: HcPeriodontogramaComponent},
              {path: 'ex-periodontal', component: HcExamenPeriodontalComponent},
              {path: 'desc-radiografica', component: HcDescripcionRadiograficaComponent},
              {path: 'diagnostico', component: HcDiagnosticoComponent},
              {path: 'diagnostico-por-diente', component: HcDiagnosticoPorDienteComponent},
              {path: 'tratamiento', component: HcTratamientoComponent},
              {path: 'consentimiento', component: HcConsentimientoComponent}
            ]
          },
          {path: 'detalles', component: PgServicioComponent}]
      },
      {path: 'ingreso', component: IngresarPacienteComponent},
      {path: 'configuraciones', component: ConfiguracionesComponent}
    ]
  }, {path: '**', component: PagenotfoundComponent}
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
    RegistroComponent,
    InicioComponent,
    TabComponent,
    SelectComponent,
    ServiciosPacienteComponent,
    PgOdontogramaComponent,
    PgServicioComponent,
    TabsComponent,
    InfoSujetoComponent,
    HcBasicComponent,
    ItemTelComponent,
    HcAnamnesisComponent,
    HcAntecedentesComponent,
    HcHabitosComponent,
    HcRevisionPorSistemComponent,
    HcExamenFisicoComponent,
    HcExamenFisicoCrnfacialComponent,
    HcExamenEstomatologicoComponent,
    HcPeriodontogramaComponent,
    HcExamenPeriodontalComponent,
    HcDescripcionRadiograficaComponent,
    HcDiagnosticoComponent,
    HcDiagnosticoPorDienteComponent,
    HcTratamientoComponent,
    HcConsentimientoComponent,
    ItemReferenciaComponent,
    CntComponent,
    ItemDirComponent],

  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule,
    AngularFireAuthModule, FormsModule],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

