import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UsuarioService } from '../../servicios/usuario.service';
import {ImagenesGaleriaService} from '../../servicios/imagenes-galeria.service';

@Component({
  selector: 'app-banco-img',
  templateUrl: './banco-img.component.html',
  styleUrls: ['./banco-img.component.css']
})
export class BancoImgComponent implements OnInit {

  imagenNoticiaSubir: File;
  imagenGaleriaSubir: File;

  imagenSel1: string | ArrayBuffer;
  imagenSel2: string | ArrayBuffer;

  mostrarImagenYo = false;
  mostrarYo = true;
  mostrarFormNoticia = false;

  img = {
    img: ''
  }

  url='http://localhost:3000/uploadYo/proyectoDW/';

  galeria:any=[];
  //http://localhost:3000/uploadYo/proyectoDW/
  constructor(
    public usuarioService: UsuarioService,
    private http: HttpClient,
    public galeriaService:ImagenesGaleriaService) {
   }

  ngOnInit(): void {

    //obtener todos la galeria
    this.galeriaService.obtenerGaleria().subscribe(
      res=>{
        this.galeria = res;
        console.log("galeria: ", this.galeria);
      },
      error=>{
        console.log(error);
      }
    );
  }

  seleccionImagenGaleria(archivo: File) {
    this.imagenGaleriaSubir = archivo;
    this.mostrarImagenYo = true;
    const reader = new FileReader();
    reader.onload = () => this.imagenSel2 = reader.result;
    reader.readAsDataURL(archivo);
  }

  subirImagenGaleria() {
    const headers = {
      miToken: this.usuarioService.token
    };

    const formData = new FormData();
    formData.append('imagenGaleria', this.imagenGaleriaSubir, this.imagenGaleriaSubir.name);
    return this.http
      .post(`${URL}/uploadGaleria`, formData, { headers })
      .subscribe();
  }

  abrirModal(){

  }

}
