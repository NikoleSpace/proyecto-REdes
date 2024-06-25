import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  dropdowns: { [key: string]: boolean } = {};

  ngOnInit() {
    // Añade el listener al hacer clic en cualquier parte del documento
    document.addEventListener('click', this.documentClick.bind(this));
  }

  ngOnDestroy() {
    // Limpia el listener cuando el componente se destruye
    document.removeEventListener('click', this.documentClick.bind(this));
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
        if (!target.closest(`.${dropdownId}`)) {
          this.dropdowns[dropdownId] = false;
        }
      }
    }
  }
}
