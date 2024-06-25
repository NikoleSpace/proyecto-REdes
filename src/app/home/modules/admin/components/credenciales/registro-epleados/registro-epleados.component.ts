import { Component } from '@angular/core';
import { AuthService } from '../../../../../../auth/service/auth.service';
@Component({
  selector: 'app-registro-epleados',
  templateUrl: './registro-epleados.component.html',
  styleUrl: './registro-epleados.component.css'
})
export class RegistroEpleadosComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  fechaTermino: string = ''; 

  constructor(private authService: AuthService) { }

  register(): void {
      const user = {
          username: this.username,
          email: this.email,
          password: this.password,
          fechaTermino: this.fechaTermino
          // Agrega otros campos según sea necesario
      };

      this.authService.registerUser(user)
          .subscribe(
              (response) => {
                  console.log('Registro exitoso:', response);
              },
              (error) => {
                  console.error('Error en el registro:', error);
                  // Manejo de errores, como mostrar un mensaje al usuario, etc.
              }
          );
  }
  close(event: Event): void {
    event.preventDefault();
    const modal: HTMLElement | null = document.querySelector('.modal-regsitro');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
}
