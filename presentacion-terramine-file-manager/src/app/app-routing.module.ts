import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'mantenimientos', component: MantenimientosComponent },
  { path: 'gestion-permisos', component: GestionPermisosComponent },
  { path: 'auditoria', component: AuditoriaComponent },
  { path: 'informes', component: InformesComponent },
  { path: 'rol', component: RolComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
