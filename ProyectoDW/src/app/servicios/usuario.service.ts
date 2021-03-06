import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';


const URL = environment.url;

@Injectable({
  providedIn: "root",
})
export class UsuarioService {

  token: string = null;
  pass = '';

  autentificado = false;

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.getId();
  }

  obtenerUsuario():Observable<any>{
    console.log('obtener usuarios del servidor');
    return this.http.get('http://localhost:3000/usuario',{});
  }

  login(correo: string, password: string) {

    const data = { correo, password };

    return new Promise(resolve => {

      this.http.post(`${URL}/usuario/entrar`, data)
        .subscribe((res: any) => {
          if (res.ok) {
            this.guardarToken(res.token);
            resolve(true);
          } else {
            resolve(false);
            this.logOut();
          }
        });
    });
  }

  guardarToken(token: string) {
    this.token = token;
  }

  logOut() {
    this.token = null;
    this.autentificado = false;
    this.router.navigateByUrl('inicio#uno');
  }

  getId() {
   /* return this.http.get(`${URL}/sobreMi`)
      .pipe(
        pluck('sobreMi', '0', '_id')
      ).subscribe((res: any) => {
        this.pass = res;
      });*/
  }

}
