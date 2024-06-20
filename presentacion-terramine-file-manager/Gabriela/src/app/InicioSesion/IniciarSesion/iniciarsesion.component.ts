import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Ruta corregida
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Inicio de sesión exitoso');
        localStorage.setItem('token', response.token);
        localStorage.setItem('firstName', response.userDto.firstName);
        localStorage.setItem('lastName', response.userDto.lastName);
        localStorage.setItem('userEmail', response.userDto.email);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error durante el inicio de sesión', error);
      }
    );
  }
}
