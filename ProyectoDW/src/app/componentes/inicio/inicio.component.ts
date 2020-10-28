import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../servicios/modal.service';

declare let $: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  constructor(public modalService: ModalService) {
    this.modalService.ofline=true;
    this.modalService.onlineAdmin=false;
   }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  abrirLogin() {
    $('#loginModal').modal('show');
  }

}
