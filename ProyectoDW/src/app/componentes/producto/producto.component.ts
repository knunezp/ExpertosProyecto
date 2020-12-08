import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm,  FormControl, Validators } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  mensaje:boolean=false;
  usuario = {
    nombres: '',
    descripcion: '',
    precio: 0,
    moneda: ''
  };

  imagenNoticiaSubir: File;
  imagenYoSubir: File;

  imagenSel1: string | ArrayBuffer;
  imagenSel2: string | ArrayBuffer;

  mostrarImagenYo = false;
  mostrarYo = true;
  mostrarFormNoticia = false;

  img = {
    img: ''
  };

  constructor(private modalService:NgbModal,
    public usuarioService: UsuarioService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  //llamar modal
  abrirModal(modal){
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:false
      }
    );
  }

  //crear plantilla
  nuevoUsuario(f: NgForm) {

    console.log(f.form);
    if (f.invalid) {
      this.mensaje=true;
      console.log(f.value);
    } else {
      console.log(f.value);

    }
  }

  seleccionImgYo(archivo: File) {
    this.imagenYoSubir = archivo;
    this.mostrarImagenYo = true;
    const reader = new FileReader();
    reader.onload = () => this.imagenSel2 = reader.result;
    reader.readAsDataURL(archivo);
  }
}
