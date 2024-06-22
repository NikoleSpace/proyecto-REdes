import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RolesComponent } from './components/roles/roles.component';
import { AreasComponent } from './components/areas/areas.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { CredencialesComponent } from './components/credenciales/credenciales.component';
import { ListaEmpleadosComponent } from './components/credenciales/lista-empleados/lista-empleados.component';
import { RegistroEpleadosComponent } from './components/credenciales/registro-epleados/registro-epleados.component';


@NgModule({
  declarations: [
    AdminComponent,
    RolesComponent,
    AreasComponent,
    SucursalesComponent,
    CredencialesComponent,
    ListaEmpleadosComponent,
    RegistroEpleadosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
