import { Component } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  notificaciones = [
    { mensaje: 'Documento subido exitosamente', fecha: '2024-06-10' },
    { mensaje: 'Tarea asignada a Juan Perez', fecha: '2024-06-12' },
    { mensaje: 'Mantenimiento programado', fecha: '2024-06-15' }
  ];

  eliminarNotificacion(notificacion: any) {
    this.notificaciones = this.notificaciones.filter(n => n !== notificacion);
  }
}
