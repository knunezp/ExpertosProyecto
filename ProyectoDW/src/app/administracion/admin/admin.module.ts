import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { FormsModule } from '@angular/forms';
import {SidebarModule} from 'ng-sidebar';
import { MenuComponent } from '../menu/menu.component';
import { MenuVComponent } from '../menu-v/menu-v.component';


@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    MenuVComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SidebarModule.forRoot()
  ]
})
export class AdminModule { }
