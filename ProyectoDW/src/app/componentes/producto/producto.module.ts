import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';


@NgModule({
  declarations: [ProductoComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FormsModule
  ]
})
export class ProductoModule { }
