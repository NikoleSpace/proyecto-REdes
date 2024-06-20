import { Component } from '@angular/core';
import { AuditoriaService } from '../services/auditoria.service';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css']
})
export class AuditoriaComponent {
  fromDate: string = '';
  toDate: string = '';
  employee: string = '';
  action: string = '';
  activities: any[] = [];
  selectedActivity: any;

  constructor(private auditoriaService: AuditoriaService) {}

  searchActivities() {
    const filters = {
      fromDate: this.fromDate,
      toDate: this.toDate,
      employee: this.employee,
      action: this.action
    };

    this.auditoriaService.getActivities(filters).subscribe(
      response => {
        this.activities = response.activities;
      },
      error => {
        console.error('Error al buscar actividades', error);
      }
    );
  }

  viewDetails(activity: any) {
    this.selectedActivity = activity;
  }
}
