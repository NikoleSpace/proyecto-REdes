import { Component } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  nuevoMensaje: string = '';
  mensajes = [
    { texto: 'Hola, ¿cómo estás?', fecha: '2024-06-10' },
    { texto: 'Recordatorio de la reunión', fecha: '2024-06-12' },
    { texto: 'Feliz cumpleaños', fecha: '2024-06-15' }
  ];

  enviarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      this.mensajes.push({
        texto: this.nuevoMensaje,
        fecha: new Date().toISOString().split('T')[0]
      });
      this.nuevoMensaje = '';
    }
  }

  eliminarMensaje(mensaje: any) {
    this.mensajes = this.mensajes.filter(m => m !== mensaje);
  }
}
