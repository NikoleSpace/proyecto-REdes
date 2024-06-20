import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarsesionComponent } from './InicioSesion/IniciarSesion/iniciarsesion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TareasComponent } from './tareas/tareas.component';
import { EquiposComponent } from './equipos/equipos.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { GestionPermisosComponent } from './gestion-permisos/gestion-permisos.component';
import { AuditoriaComponent } from './auditoria/auditoria.component';
import { InformesComponent } from './informes/informes.component';
import { RolComponent } from './rol/rol.component';
import { RegistroComponent } from './InicioSesion/registro/registro.component';
import { RegistrolistoComponent } from './InicioSesion/registrolisto/registrolisto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth.interceptor';

import { HomeComponent} from "./Paginicio/home.component";
import { PerfilComponent} from "./Perfil/perfil.component";
import { SobrenosotrosComponent } from './SobreNosotros/sobrenosotros.component';
import { NotificacionesComponent } from './Notificaciones/notificaciones/notificaciones.component';
import { MensajesComponent } from './Mensajes/mensajes/mensajes.component';
// Servicios
import { AuthService } from './services/auth.service';
import { PermisosService } from './services/permisos.service';
import { AuditoriaService } from './services/auditoria.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DocumentosComponent,
    IniciarsesionComponent,
    ProyectosComponent,
    TareasComponent,
    EquiposComponent,
    PerfilComponent,
    MantenimientosComponent,
    GestionPermisosComponent,
    AuditoriaComponent,
    InformesComponent,
    RolComponent,
    RegistroComponent,
    RegistrolistoComponent,
    HomeComponent,
    PerfilComponent,
    SobrenosotrosComponent,
    NotificacionesComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    PermisosService,
    AuditoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
