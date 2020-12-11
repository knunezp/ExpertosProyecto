import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ImagenesGaleriaService {

  constructor(private httpClient:HttpClient,
    private usuarioService: UsuarioService) { }

    obtenerGaleria():Observable<any>{
      console.log('obtener galeria del servidor');
      return this.httpClient.get('http://localhost:3000/uploadGaleria',{});
    }

    //http://localhost:3000/uploadYo/proyectoDW/
}
