import { UsuarioService } from './../../servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../servicios/modal.service';


import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

//import Swal from 'sweetalert2';

declare let $: any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  usuarioLogin = {
    nombre:"",
    password:""
  };

  constructor(
    public modalService: ModalService,
    private router: Router,
    public usuarioService: UsuarioService) {
    this.modalService.online = false;
  }

  ngOnInit(): void {
  }

  limpiarUsuario(){
    this.usuarioLogin.nombre='';
    this.usuarioLogin.password='';
  }

  salirLogin(){
    $('#loginModal').modal('hide');
  }

  async login(forma: NgForm){

    if (forma.invalid) {
      this.salirLogin();
    }
    console.log(forma.value);
    const usuarioValido=await this.usuarioService.login(this.usuarioLogin.nombre, this.usuarioLogin.password);

    if (usuarioValido) {
    this.salirLogin();
    this.usuarioService.autentificado=true;
    setTimeout(() => {
      $('#navbar-collapse').collapse('hide');
    }, 1000);
    /*const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      customClass: {confirmButton:'back9'}
    });

    Toast.fire({
      title: this.usuarioLogin.nombre + ' ONLINE',
      //background:'rgb(233,233,0)',
      icon: 'success'
    });*/
    this.salirLogin();
    this.limpiarUsuario();
    this.modalService.online = true;
    this.router.navigateByUrl('principal');
      console.log('entro: ',this.modalService.online);
    } else {
      /*const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        customClass: {confirmButton:'back9'}
      });

      Toast.fire({
        title: 'DATOS INVALIDOS',
        background:'rgb(233,233,0)',
        icon: 'error'
      });*/
      $('#navbar-collapse').collapse('hide');
      this.salirLogin();
      this.limpiarUsuario();
    }
  }

  logOut() {
    this.usuarioService.logOut();
    this.modalService.logOut();

  }
}
