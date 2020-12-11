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
    correo:"",
    password:""
  };

  mensaje:boolean;

  constructor(
    public modalService: ModalService,
    private router: Router,
    public usuarioService: UsuarioService) {
    this.modalService.online = false;
    this.mensaje=false;
  }

  ngOnInit(): void {
  }

  limpiarUsuario(){
    this.usuarioLogin.correo='';
    this.usuarioLogin.password='';
  }

  salirLogin(){
    //$('#loginModal').modal('hide');
  }

  async login(forma: NgForm){

    if (forma.invalid) {
      this.mensaje=true;
    }
    console.log(forma.value);
    const usuarioValido=await this.usuarioService.login(this.usuarioLogin.correo, this.usuarioLogin.password);

    if (usuarioValido) {
    this.salirLogin();
    this.usuarioService.autentificado=true;
    this.limpiarUsuario();
    this.router.navigateByUrl('admin');
      console.log('entro: admin',this.modalService.online);
    } else {
      this.limpiarUsuario();
    }
  }

  logOut() {
    this.usuarioService.logOut();
    this.modalService.logOut();
  }
}
