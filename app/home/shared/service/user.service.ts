// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/service/auth.service'; // Importa AuthService para obtener el token

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllUsers(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<any[]>(`${this.apiUrl}/users`, { headers });
  }

  getUserById(userId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<any>(`${this.apiUrl}/users/${userId}`, { headers });
  }

  updateUser(userId: string, userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`,
      'Content-Type': 'application/json'
    });

    return this.http.put<any>(`${this.apiUrl}/users/${userId}`, userData, { headers });
  }

  deleteUser(userId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`, { headers });
  }
}
