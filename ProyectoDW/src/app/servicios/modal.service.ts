import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  privacidad: boolean;
  privacidadSeleccionada: boolean;

  onlineAdmin:boolean;
  online: boolean;
  ofline:boolean;

  constructor() { }

  logOut(){
    this.online = false;
  }
}
