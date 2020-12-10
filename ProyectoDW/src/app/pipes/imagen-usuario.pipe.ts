import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Pipe({
  name: 'imagenUsuario'
})
export class ImagenUsuarioPipe implements PipeTransform {

  transform(img: string): string {
    return `${URL}/usuario/imgUsuario/${img}`;
  }

}
