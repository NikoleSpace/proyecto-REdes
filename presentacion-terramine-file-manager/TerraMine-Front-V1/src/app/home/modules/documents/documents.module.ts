import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { ListDocumentsComponent } from './components/list-documents/list-documents.component';


@NgModule({
  declarations: [
    DocumentsComponent,
    ListDocumentsComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ]
})
export class DocumentsModule { }
