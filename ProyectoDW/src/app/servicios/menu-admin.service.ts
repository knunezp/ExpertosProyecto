import { Injectable } from '@angular/core';

declare let $: any;
@Injectable({
  providedIn: "root",
})
export class MenuAdminService {
  
  inicio: Boolean;
  pagos: Boolean;
  usuarios: Boolean;
  planes: Boolean;
  plantillas: Boolean;

  opened = true;
  constructor() {}

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
