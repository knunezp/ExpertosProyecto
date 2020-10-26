import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearUsuarioRoutingModule } from './crear-usuario-routing.module';
import { CrearUsuarioComponent } from './crear-usuario.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CrearUsuarioComponent],
  imports: [
    CommonModule,
    CrearUsuarioRoutingModule,
    FormsModule
  ]
})
export class CrearUsuarioModule { }
