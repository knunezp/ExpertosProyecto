import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  planSeleccionado: any;

  plan = false;

  constructor(private httpClient:HttpClient,
    private usuarioService: UsuarioService,
    private router: Router) { }

  obtenerPlan():Observable<any>{
    console.log('obtener plan del servidor');
    return this.httpClient.get('http://localhost:3000/plan',{});
  }

  borrarPlan(id: string) {
    return this.httpClient.delete(`http://localhost:3000/plan/${id}`);
  }

  crearPlan(plan:any) {

    return this.httpClient.post(`http://localhost:3000/plan/crear`, plan).subscribe(() => {
      this.router.navigateByUrl('/principal', { skipLocationChange: true })
        .then(() => this.router.navigate(['admin']));
        console.log('se creo ');
    });
  }
}
