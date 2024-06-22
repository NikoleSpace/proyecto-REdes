import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'; // Reemplaza con la URL de tu backend
  private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private userId: string = ''; // Variable para almacenar el userId

  constructor(private http: HttpClient, private router: Router) { }
  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }
  
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.tokenSubject.next(response.token);
          this.userId = this.parseUserIdFromToken(response.token); 
          localStorage.setItem('userId', this.userId); // Guardar userId en localStorage
          console.log('User ID:', this.userId); // Mostrar el userId en consola
        }
      })
    );
  }

  private parseUserIdFromToken(token: string): string {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken.id;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserId(): string {
    const userId = localStorage.getItem('userId');
    return userId ? userId : '';
  }
  
  
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); // Remover userId del localStorage al cerrar sesión
    this.tokenSubject.next('');
    this.router.navigateByUrl('/login');
  }


}
