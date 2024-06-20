import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  private apiUrl = 'http://tuservidor.com/api/permisos'; // Cambia esto por tu URL de API

  constructor(private http: HttpClient) {}

  createRole(roleData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/roles`, roleData);
  }
}
