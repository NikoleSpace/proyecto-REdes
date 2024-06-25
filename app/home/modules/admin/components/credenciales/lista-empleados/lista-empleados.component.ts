import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../../../shared/service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit, OnDestroy {
  users: any[] = [];
  dropdowns: { [key: string]: boolean } = {};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
    // Añade el listener al hacer clic en cualquier parte del documento
    document.addEventListener('click', this.documentClick.bind(this));
  }

  ngOnDestroy() {
    // Limpia el listener cuando el componente se destruye
    document.removeEventListener('click', this.documentClick.bind(this));
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(
      (users: any[]) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  toggleDropdown(event: Event, dropdownId: string) {
    this.dropdowns[dropdownId] = !this.dropdowns[dropdownId];
    event.stopPropagation(); // Evita que otros manejadores de eventos en padres se ejecuten
  }

  documentClick(event: Event) {
    // Cierra todos los dropdowns abiertos si se hace clic fuera de ellos
    for (const dropdownId in this.dropdowns) {
      if (this.dropdowns.hasOwnProperty(dropdownId)) {
        const target = event.target as HTMLElement;
        if (!target.closest(`.dropdown-menu`)) {
          this.dropdowns[dropdownId] = false;
        }
      }
    }
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(
      () => {
      this.loadUsers();
      },
      (error) => {
      console.error('Error deleting user:', error);
      }
    );
    console.log('Eliminar usuario con ID:', userId);
  }
}
