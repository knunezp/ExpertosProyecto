import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public modalService: ModalService,private router: Router) {
  }

  ngOnInit(): void {
  }

  cerrarNavbar() {
    $(".navbar-collapse").collapse("hide");
  }

  abrirLogin() {
    $('#loginModal').modal('show');
  }

  logOut(){
    this.cerrarNavbar();
    this.modalService.logOut();
    /*const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      customClass: {confirmButton:'back9'}
    });

    Toast.fire({
      title: 'OUTLINE',
      //background:'rgb(233,233,0)',
      icon: 'success'
    });*/
  }
}
