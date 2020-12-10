import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;
@Pipe({
  name: 'imagenProducto'
})
export class ImagenProductoPipe implements PipeTransform {

  transform(img: string): string {
    return `${URL}/producto/imgUsuario/${img}`;
  }

}
