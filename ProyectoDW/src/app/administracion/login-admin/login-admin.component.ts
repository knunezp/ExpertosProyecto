import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../servicios/modal.service';
import { UsuarioService } from '../../servicios/usuario.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-login-admin",
  templateUrl: "./login-admin.component.html",
  styleUrls: ["./login-admin.component.css"],
})
export class LoginAdminComponent implements OnInit {

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
    //$('#loginModal').modal('hide');
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


    this.salirLogin();
    this.limpiarUsuario();
    this.router.navigateByUrl('admin');
      console.log('entro: admin',this.modalService.online);
    } else {

      this.salirLogin();
      this.limpiarUsuario();
    }
  }

  logOut() {
    this.usuarioService.logOut();
    this.modalService.logOut();

  }
}
