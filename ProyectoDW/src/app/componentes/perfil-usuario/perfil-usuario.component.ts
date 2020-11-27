import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styles: []
})
export class PerfilUsuarioComponent implements OnInit {

  imagenNoticiaSubir: File;
  imagenYoSubir: File;

  imagenSel1: string | ArrayBuffer;
  imagenSel2: string | ArrayBuffer;

  mostrarImagenYo = true;
  mostrarYo = true;
  mostrarFormNoticia = false;

  constructor(public usuarioService: UsuarioService,
    private http: HttpClient) {
   }

  ngOnInit(): void {
  }

  seleccionImgYo(archivo: File) {
    this.imagenYoSubir = archivo;
    this.mostrarImagenYo = true;
    const reader = new FileReader();
    reader.onload = () => this.imagenSel2 = reader.result;
    reader.readAsDataURL(archivo);
  }

}
