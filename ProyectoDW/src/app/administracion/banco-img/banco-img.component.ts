import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banco-img',
  templateUrl: './banco-img.component.html',
  styleUrls: ['./banco-img.component.css']
})
export class BancoImgComponent implements OnInit {

  imagenNoticiaSubir: File;
  imagenYoSubir: File;

  imagenSel1: string | ArrayBuffer;
  imagenSel2: string | ArrayBuffer;

  mostrarImagenYo = false;
  mostrarYo = true;
  mostrarFormNoticia = false;

  img = {
    img: ''
  }

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

  abrirModal(){

  }

}
