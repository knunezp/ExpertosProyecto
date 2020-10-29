import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { FormsModule } from '@angular/forms';
import {SidebarModule} from 'ng-sidebar';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SidebarModule.forRoot()
  ]
})
export class AdminModule { }
