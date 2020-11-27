import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { MenuComponent } from '../menu/menu.component';
import { MenuVComponent } from '../menu-v/menu-v.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { PagosComponent } from '../pagos/pagos.component';
import { BancoImgComponent } from '../banco-img/banco-img.component';

import { FormsModule } from '@angular/forms';
import {SidebarModule} from 'ng-sidebar';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import {DataTablesModule} from 'angular-datatables';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    MenuVComponent,
    UsuariosComponent,
    PagosComponent,
    PlantillaComponent,
    BancoImgComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SidebarModule.forRoot(),
    DataTablesModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AdminModule { }
