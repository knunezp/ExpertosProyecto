import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  planSeleccionado: any;

  plan = false;

  constructor(private httpClient:HttpClient,
    private usuarioService: UsuarioService) { }

  obtenerPlan():Observable<any>{
    console.log('obtener plan del servidor');
    return this.httpClient.get('http://localhost:3000/plan',{});
  }
}
