import { Component } from '@angular/core';

interface Documento {
  id: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent {
  documentos: Documento[] = [
    { id: 1, nombre: 'Documento 1', descripcion: 'Descripción del Documento 1' },
    { id: 2, nombre: 'Documento 2', descripcion: 'Descripción del Documento 2' },
    { id: 3, nombre: 'Documento 3', descripcion: 'Descripción del Documento 3' }
  ];

  verDocumento(documento: Documento) {
    // Implementa la lógica para ver el documento
    console.log('Ver documento', documento);
  }

  modificarDocumento(documento: Documento) {
    // Implementa la lógica para modificar el documento
    console.log('Modificar documento', documento);
  }

  eliminarDocumento(documento: Documento) {
    // Implementa la lógica para eliminar el documento
    this.documentos = this.documentos.filter(d => d.id !== documento.id);
    console.log('Eliminar documento', documento);
  }

  crearDocumento() {
    // Implementa la lógica para crear un nuevo documento
    const nuevoId = this.documentos.length + 1;
    this.documentos.push({ id: nuevoId, nombre: `Documento ${nuevoId}`, descripcion: `Descripción del Documento ${nuevoId}` });
    console.log('Crear nuevo documento');
  }
}
