import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    // Lógica de autenticación aquí (esto es solo un ejemplo)
    this.router.navigate(['/dashboard']);
  }
}
