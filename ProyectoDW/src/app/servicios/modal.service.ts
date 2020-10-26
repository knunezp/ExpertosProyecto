import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  privacidad: boolean;
  privacidadSeleccionada: boolean;
  online: boolean;

  constructor() { }

  logOut(){
    this.online = false;
  }
}
