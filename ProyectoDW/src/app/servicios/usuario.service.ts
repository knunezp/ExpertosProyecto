import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const URL = environment.url;

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  autentificado = false;
  token :string=null;

  constructor(private http: HttpClient) {}


  login(nombre: string, password: string) {
    const data = {nombre, password};

    return new Promise(resolve=>{
      this.http.post(`${URL}/usuario/entrar`,data)
      .subscribe((res:any)=>{
        console.log(res);
      });

    });
  }
}
