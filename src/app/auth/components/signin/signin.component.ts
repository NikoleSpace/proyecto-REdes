import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private authService: AuthService, private router: Router) { }

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      () => {
        this.router.navigateByUrl('/home');
      },
      error => {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
        console.error(error);
      }
    );
  }
}
