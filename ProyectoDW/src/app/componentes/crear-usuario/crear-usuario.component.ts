import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgForm,  FormControl, Validators } from '@angular/forms';

//import Swal from 'sweetalert2';

declare let $: any;

@Component({

  selector: "app-crear-usuario",
  templateUrl: "./crear-usuario.component.html",
  styles: [],
})
export class CrearUsuarioComponent implements OnInit {

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


  constructor() {
  }

  ngOnInit(): void {}

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
    
    console.log(f.form);
    if (f.invalid) {
      this.mensaje=true;
      console.log(f.value);
      /*const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        customClass: {confirmButton:'back9'}
      });

      Toast.fire({
        title: 'Todos los campos son obligatorios',
        //background:'rgb(233,233,0)',
        icon: 'error'
      });*/
    } else {
      $('#contacto').modal('hide');
      console.log(f.value);
      /*const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        customClass: {confirmButton:'back9'}
      });

      Toast.fire({
        title: 'Registro Exitoso',
        //background:'rgb(233,233,0)',
        icon: 'success'
      });*/
    }
  }


}
