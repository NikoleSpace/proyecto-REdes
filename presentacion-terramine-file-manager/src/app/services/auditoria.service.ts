import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {
  private apiUrl = 'http://tuservidor.com/api/auditoria'; // Cambia esto por tu URL de API

  constructor(private http: HttpClient) {}

  getActivities(filters: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/actividades`, filters);
  }
}
