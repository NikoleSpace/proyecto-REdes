import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { AuthService } from '../../../../../auth/service/auth.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  
  userId: string = '';
  user: any = {}; // Objeto para almacenar la información del usuario
  userInitial: string = '';
  isEditMode: boolean = false; // Variable para controlar el modo de edición
  originalUser: any = {}; // Para almacenar la información original del usuario

  constructor(
    private userService: UserService, 
    private authService: AuthService, 

  ) { }


  ngOnInit(): void {
    this.userId = this.authService.getUserId();

    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe(
        (response) => {
          this.user = response; // Asigna la respuesta del servicio al objeto de usuario
          this.userInitial = this.getUserInitial(this.user.username); // Obtiene la inicial del nombre para la imagen
          this.originalUser = { ...this.user }; // Guarda la información original del usuario
        },
        (error) => {
          console.error('Error al cargar información del usuario:', error);
        }
      );
    }
  }

  // Método para obtener la inicial del nombre
  getUserInitial(name: string): string {
    if (!name) return '';
    return name.charAt(0).toUpperCase();
  }

  // Método para alternar el modo de edición
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  // Método para guardar los cambios
  saveChanges(): void {
    this.userService.updateUser(this.userId, this.user).subscribe(
      (response) => {
        this.user = response;
        this.userInitial = this.getUserInitial(this.user.username); // Asegura que la inicial se actualice
        this.originalUser = { ...this.user }; // Actualiza la información original
        this.isEditMode = false;
        this.refreshperfil();
      },
      (error) => {
        console.error('Error al actualizar la información del usuario:', error);
      }
    );
  }

  // Método para cancelar los cambios
  cancelChanges(): void {
    this.user = { ...this.originalUser }; // Restaura la información original del usuario
    this.isEditMode = false;
    this.refreshperfil();
  }

  close(event: Event): void {
    event.preventDefault();
    const modal: HTMLElement | null = document.querySelector('.modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  private refreshperfil(): void {
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe(
        (response) => {
          this.user = response; // Asigna la respuesta del servicio al objeto de usuario
          this.userInitial = this.getUserInitial(this.user.username); // Obtiene la inicial del nombre para la imagen
        },
        (error) => {
          console.error('Error al cargar información del usuario:', error);
        }
      );
    }
  }
}
