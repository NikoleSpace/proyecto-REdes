import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.component.html',
  styleUrls: ['perfil.component.css']
})
export class PerfilComponent implements OnInit {
  firstName: string | null;
  lastName: string | null;
  email: string | null;

  constructor(private router: Router) {
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.email = localStorage.getItem('userEmail');
  }

  ngOnInit(): void {
    // Si alguno de los datos esenciales no está presente, redirige a /registro
    if (!this.firstName || !this.lastName || !this.email) {
      this.router.navigate(['/registro']);
    }
  }
}
