import { EditorContenidoComponent } from './../editor-contenido/editor-contenido.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ng2-ckeditor';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrincipalComponent,EditorContenidoComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    CKEditorModule,
    FormsModule
  ]
})
export class PrincipalModule { }
