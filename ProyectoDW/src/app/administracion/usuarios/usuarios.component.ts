import { Component,OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm,  FormControl, Validators } from '@angular/forms';


import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/servicios/usuario.service';

declare let $: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements  OnInit {


  p: number = 1;
  total:number=0;

  usuarioEmpresa: boolean = false;
  mensaje:boolean=false;
  prueba: string = "";
  empresa: string = "";

  usuario = {
    nombres: '',
    apellidos: '',
    correo: '',
    contrasenia: '',
    tipoUsuario: '',
    nombreEmpresa: '',
    rtn: '',
    telefonoE: '',
    direccionE: ''
  };

  public data = [
    {name: 'test1', email: 'test@gmail.com', apellidos:'prueba',tipoUsuario:'normal'},
    {name: 'test2', email: 'test@gmail.com', apellidos:'prueba',tipoUsuario:'empresa'},
    {name: 'test3', email: 'test@gmail.com', apellidos:'prueba',tipoUsuario:'admin'},
    {name: 'test4', email: 'test@gmail.com', apellidos:'prueba',tipoUsuario:'normals'},
];

users:any=[];

  public constructor(private http:HttpClient,private spinner: NgxSpinnerService
    ,private usuarioService: UsuarioService,) {

  }

  ngOnInit():void {

    //obtener todos los planes
    this.usuarioService.obtenerUsuario().subscribe(
      res=>{
        this.users = res;
        console.log("users: ", this.users);
      },
      error=>{
        console.log(error);
      }
    );

    this.total=this.data.length;
    console.log(this.users.length);
  }

  onPageChange(event){
     /** spinner starts on init */
    this.spinner.show();
    this.p=event;
    setTimeout(() => {
       /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

  cerrarModal(){
    $('#nuevoUsuario').modal('hide');
  }

  abrirModal(){
    $('#nuevoUsuario').modal('show');
  }

  mostraEmpresa() {
    if (this.usuarioEmpresa == false) {
      this.usuarioEmpresa = true;
      //console.log(this.usuarioEmpresa);
    }
  }


  ocultarEmpresa() {
    if (this.usuarioEmpresa) {
      this.usuarioEmpresa = false;
      //console.log(this.usuarioEmpresa);
    }
  }
  /*Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])*/
  //crear usuario
  nuevoUsuario(f: NgForm) {
    if (f.invalid) {
      this.mensaje=true;
      console.log('No estan todos los campos  ');
    } else {
      $('#contacto').modal('hide');
      console.log('usuario registrado  ',f.value);
    }
  }
}
