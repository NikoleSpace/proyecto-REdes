import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  dropdownOpen = false;

  toggleDropdown(event: Event) {
    this.dropdownOpen = !this.dropdownOpen;
    event.stopPropagation(); // Evita que otros manejadores de eventos en padres se ejecuten
  }

  // Cierra el dropdown si se hace clic fuera de él
  documentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.dropdownOpen = false;
    }
  }

  ngOnInit() {
    // Añade el listener al hacer clic en cualquier parte del documento
    document.addEventListener('click', this.documentClick.bind(this));
  }

  ngOnDestroy() {
    // Limpia el listener cuando el componente se destruye
    document.removeEventListener('click', this.documentClick.bind(this));
  }
}
