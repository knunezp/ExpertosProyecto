import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { ModalService } from '../../servicios/modal.service';

//import Swal from 'sweetalert2';
declare let $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {


  login = true;

  constructor(public modalService: ModalService,
    private router: Router,
    public usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }

  cerrarNavbar() {
    $(".navbar-collapse").collapse("hide");
  }

  abrirLogin() {
    $('#loginModal').modal('show');
  }

  logOut() {
    this.usuarioService.logOut();
    this.cerrarNavbar();
    this.modalService.logOut();
  }
}
