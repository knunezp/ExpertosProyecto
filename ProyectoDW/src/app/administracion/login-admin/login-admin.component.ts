import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../servicios/modal.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-login-admin",
  templateUrl: "./login-admin.component.html",
  styleUrls: ["./login-admin.component.css"],
})
export class LoginAdminComponent implements OnInit {
  
  usuarioLogin = {
    nombre:"Administrador",
    password:"admin123"
  };

  constructor(public modalService: ModalService, private router: Router) {
    this.modalService.online=false;
    //this.modalService.onlineAdmin=false;
    console.log(this.modalService.onlineAdmin);
  }

  ngOnInit(): void {}

  limpiarUsuario(){
    this.usuarioLogin.nombre='';
    this.usuarioLogin.password='';
  }

  login(forma: NgForm){
    console.log(forma.value);
    if (this.usuarioLogin.nombre=='Administrador' && this.usuarioLogin.password=='admin123') {
    this.limpiarUsuario();
    //this.modalService.online = true;
    this.modalService.onlineAdmin=true;
    this.router.navigateByUrl('admin');
      console.log('entro: ',this.modalService.onlineAdmin);
    } else {
      this.limpiarUsuario();
    }
  }
}
