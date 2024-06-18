import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DocumentosComponent,
    ProyectosComponent,
    TareasComponent,
    EquiposComponent,
    MantenimientosComponent,
    GestionPermisosComponent,
    AuditoriaComponent,
    InformesComponent,
    RolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
