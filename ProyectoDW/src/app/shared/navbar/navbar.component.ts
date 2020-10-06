import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
declare let $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirLogin(){
    $('#loginModal').modal('show');
  }

}
