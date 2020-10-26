import { Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  abrirLogin() {
    $('#loginModal').modal('show');
  }

}
