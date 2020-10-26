import { Injectable } from '@angular/core';
import { environment } from '../../../../../courseAngular/src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'dns';

//const URL=environment.url;


@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  autentificado = false;
  token = false;
  constructor(private http: HttpClient) {}


  login(nombre: string; password: string) {
    const data = {nombre, password};

    return new Promise(resolve=>{
      this.http.post(`${URL}/usuario/entrar`,data)
      .subscribe((res:any)=>{
        console.log(res);
      });

    });
  }
}
