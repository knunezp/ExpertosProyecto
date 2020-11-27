import { Component, OnInit } from '@angular/core';
import { MenuAdminService } from './../../servicios/menu-admin.service';
import { ModalService } from './../../servicios/modal.service';
import { UsuarioService } from './../../servicios/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-v',
  templateUrl: './menu-v.component.html',
  styleUrls: ['./menu-v.component.css']
})
export class MenuVComponent implements OnInit {

  constructor(public menuAdmin: MenuAdminService,
    public modalService: ModalService,
    private router: Router,
    public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.usuarioService.logOut();
    this.modalService.logOut();
  }

}
