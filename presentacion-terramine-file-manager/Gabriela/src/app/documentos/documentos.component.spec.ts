import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentosComponent } from './documentos.component';
import { By } from '@angular/platform-browser';

describe('DocumentosComponent', () => {
  let component: DocumentosComponent;
  let fixture: ComponentFixture<DocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentosComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Gestión de Documentos');
  });

  it('should display a list of documentos with action buttons', () => {
    component.documentos = [
      { id: 1, nombre: 'Documento 1', descripcion: 'Descripción del Documento 1' },
      { id: 2, nombre: 'Documento 2', descripcion: 'Descripción del Documento 2' },
      { id: 3, nombre: 'Documento 3', descripcion: 'Descripción del Documento 3' }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('.list-group-item');
    expect(items.length).toBe(3);
    expect(items[0].querySelector('h3')?.textContent).toBe('Documento 1');
    expect(items[0].querySelector('p')?.textContent).toBe('Descripción del Documento 1');
    expect(items[0].querySelector('.btn-info')).toBeTruthy();
    expect(items[0].querySelector('.btn-warning')).toBeTruthy();
    expect(items[0].querySelector('.btn-danger')).toBeTruthy();
  });

  it('should add a new document', () => {
    const initialLength = component.documentos.length;
    component.crearDocumento();
    fixture.detectChanges();

    expect(component.documentos.length).toBe(initialLength + 1);
    const newDocument = component.documentos[component.documentos.length - 1];
    expect(newDocument.nombre).toBe(`Documento ${initialLength + 1}`);
    expect(newDocument.descripcion).toBe(`Descripción del Documento ${initialLength + 1}`);
  });

  it('should delete a document', () => {
    component.documentos = [
      { id: 1, nombre: 'Documento 1', descripcion: 'Descripción del Documento 1' },
      { id: 2, nombre: 'Documento 2', descripcion: 'Descripción del Documento 2' },
      { id: 3, nombre: 'Documento 3', descripcion: 'Descripción del Documento 3' }
    ];
    fixture.detectChanges();

    const initialLength = component.documentos.length;
    component.eliminarDocumento(component.documentos[0]);
    fixture.detectChanges();

    expect(component.documentos.length).toBe(initialLength - 1);
    expect(component.documentos.find(d => d.id === 1)).toBeUndefined();
  });
});
