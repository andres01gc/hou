import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ServiciosComponent} from './main_routes/home/main/perfil/serviciosC/inicio.component';
import {RouterModule, Routes} from '@angular/router';
import {PacienteComponent} from './main_routes/paciente/paciente.component';
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
import {ConfiguracionesComponent} from './main_routes/configuraciones/configuraciones.component';
import {MiscComponent} from './misc/misc.component';
import {AnexosComponent} from './anexos/anexos.component';
import {HistoriaComponent} from './historia/historia.component';
import {ResumenComponent} from './resumen/resumen.component';
import {RegistroComponent} from './registro/registro.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {InicioComponent} from './main_routes/inicio/inicio.component';
import {SelectComponent} from './utils/select/select.component';
import {ServiciosPacienteComponent} from './servicios-paciente/servicios-paciente.component';
import {PgOdontogramaComponent} from './pg-odontograma/pg-odontograma.component';
import {PgServicioComponent} from './pg-servicio/pg-servicio.component';
import {TabsComponent} from './tabs/tabs.component';
import {TabComponent} from './tab/tab.component';
import {InfoSujetoComponent} from './items/info-sujeto/info-sujeto.component';
import {ItemTelComponent} from './items/item-tel/item-tel.component';
import {ItemReferenciaComponent} from './items/item-referencia/item-referencia.component';
import {CntComponent} from './cnt/cnt.component';
import {ItemDirComponent} from './items/item-dir/item-dir.component';
import {AppCheckboxComponent} from './app-checkbox/app-checkbox.component';
import {MultipleComponent} from './items/multiple/multiple.component';
import {UserServiciosComponent} from './user-servicios/user-servicios.component';
import {ServicioUserComponent} from './user-citas/user-citas.component';
import {UserResumenComponent} from './user-resumen/user-resumen.component';
import {HcRequerimientosComponent} from './hc-requerimientos/hc-requerimientos.component';
import {UserResponsableComponent} from './user-responsable/user-responsable.component';
import {CardEvolucionComponent} from './card-evolucion/card-evolucion.component';
import {SupportDataService} from './services/datasuport';
import {AdvertenciaIniciarServicioComponent} from './advertencia-iniciar-servicio/advertencia-iniciar-servicio.component';
import {CancelarServicioComponent} from './cancelar-servicio/cancelar-servicio.component';
import {ReasignarCitaComponent} from './reasignar-cita/reasignar-cita.component';
import {PgEvolucionComponent} from './pg-evolucion/pg-evolucion.component';
import {AppMintabComponent} from './app-mintab/app-mintab.component';
import {CondicionalComponent} from './condicional/condicional.component';
import {ItemEnfermedadComponent} from './item-enfermedad/item-enfermedad.component';
import {PopcardComponent} from './popcard/popcard.component';
import {ItemBtComponent} from './item-bt/item-bt.component';
import {ItemAnextabComponent} from './item-anextab/item-anextab.component';
import {PopdateService} from './popdate.service';
import {PacienteService} from './paciente.service';
import {PgTratamientoComponent} from './pg-tratamiento/pg-tratamiento.component';
import {CardUserServicioComponent} from './card-user-servicio/card-user-servicio.component';
import {AsignarComponent} from './asignar-cita/asignar.component';
import { AdvComponent } from './adv/adv.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {
    path: '', component: MainComponent, children: [
      {
        path: '', component: PerfilComponent, children: [
          {path: '', component: UserServiciosComponent},
          {path: 'servicio', component: PgServicioComponent},
          {path: 'historia', component: HistoriaComponent}
        ]
      },
      {
        path: 'paciente', component: PacienteComponent, children: [
          {
            path: '',
            component: ServiciosPacienteComponent
          }, {
            path: 'servicios', component: ServiciosPacienteComponent
          },
          {
            path: 'serv', component: PgServicioComponent
          },
          {
            path: 'historia', component: HistoriaComponent
          },
          {path: 'detalles', component: PgServicioComponent}]
      },
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
    ItemTelComponent,
    ItemReferenciaComponent,
    CntComponent,
    ItemDirComponent,
    AppCheckboxComponent,
    MultipleComponent,
    UserServiciosComponent,
    ServicioUserComponent,
    UserResumenComponent,
    HcRequerimientosComponent,
    UserResponsableComponent,
    CardEvolucionComponent,
    AdvertenciaIniciarServicioComponent,
    CancelarServicioComponent,
    ReasignarCitaComponent,
    PgEvolucionComponent,
    AppMintabComponent,
    CondicionalComponent,
    ItemEnfermedadComponent,
    PopcardComponent,
    ItemBtComponent,
    PgTratamientoComponent,
    ItemAnextabComponent,
    CardUserServicioComponent,
    AsignarComponent,
    AdvComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule,
    AngularFireAuthModule, FormsModule],
  providers: [AuthService, DataService, SupportDataService, PopdateService, PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

