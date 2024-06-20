import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarsesionComponent } from './InicioSesion/IniciarSesion/iniciarsesion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent} from "./Paginicio/home.component";
import { NotificacionesComponent } from './Notificaciones/notificaciones/notificaciones.component';
import { MensajesComponent } from './Mensajes/mensajes/mensajes.component';
import { PerfilComponent} from "./Perfil/perfil.component";
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
import { SobrenosotrosComponent} from "./SobreNosotros/sobrenosotros.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gestion-permisos', component: GestionPermisosComponent },
  { path: 'auditoria', component: AuditoriaComponent },
  { path: 'home', component: HomeComponent},
  { path: 'iniciarsesion', component: IniciarsesionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'mantenimientos', component: MantenimientosComponent },
  { path: 'gestion-permisos', component: GestionPermisosComponent },
  { path: 'auditoria', component: AuditoriaComponent },
  { path: 'informes', component: InformesComponent },
  { path: 'rol', component: RolComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registrolisto', component: RegistrolistoComponent },
  { path: 'sobrenosotros', component: SobrenosotrosComponent},
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: '', redirectTo: '/iniciarsesion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
