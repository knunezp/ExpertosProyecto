import { Injectable } from '@angular/core';

declare let $: any;
@Injectable({
  providedIn: 'root'
})
export class MenuAdminService {

  opened=true;
  constructor() {}

  toggleSidebar(){
    this.opened=!this.opened;
  }

}
