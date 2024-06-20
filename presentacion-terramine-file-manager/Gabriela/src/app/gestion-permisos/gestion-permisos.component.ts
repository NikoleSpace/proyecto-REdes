import { Component } from '@angular/core';
import { PermisosService } from '../services/permisos.service';

@Component({
  selector: 'app-gestion-permisos',
  templateUrl: './gestion-permisos.component.html',
  styleUrls: ['./gestion-permisos.component.css']
})
export class GestionPermisosComponent {
  roleName: string = '';
  roleDescription: string = '';
  permissions = {
    viewDocuments: false,
    editDocuments: false,
    deleteDocuments: false,
    assignTasks: false,
    registerMaintenances: false
  };
  successMessage: string = '';

  constructor(private permisosService: PermisosService) {}

  createRole() {
    const roleData = {
      name: this.roleName,
      description: this.roleDescription,
      permissions: this.permissions
    };

    this.permisosService.createRole(roleData).subscribe(
      response => {
        this.successMessage = 'Rol creado y permisos asignados correctamente';
      },
      error => {
        console.error('Error al crear el rol', error);
      }
    );
  }
}
