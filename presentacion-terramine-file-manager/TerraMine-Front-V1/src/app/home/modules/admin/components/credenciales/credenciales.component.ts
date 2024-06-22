import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.component.html',
  styleUrl: './credenciales.component.css'
})
export class CredencialesComponent {
  open(event : Event ): void {
    event.preventDefault();
    const modal: HTMLElement | null = document.querySelector('.modal-regsitro');
    if (modal) {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  }
}
