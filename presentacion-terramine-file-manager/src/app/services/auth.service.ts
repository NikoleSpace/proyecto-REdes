import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://3.15.157.205/auth/signup';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://3.15.157.205/auth/signin', { email, password });
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }

  getUserRole(): string {
    // Lógica para obtener el rol del usuario
    return 'admin'; // Esto es solo un ejemplo, deberías obtener el rol real del usuario
  }
}
