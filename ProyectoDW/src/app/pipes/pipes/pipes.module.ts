import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenUsuarioPipe } from '../imagen-usuario.pipe';
import { ImagenProductoPipe } from '../imagen-producto.pipe';



@NgModule({
  declarations: [ImagenUsuarioPipe,ImagenProductoPipe],
  imports: [
    CommonModule
  ],
  exports: [ImagenUsuarioPipe,ImagenProductoPipe]
})
export class PipesModule { }
