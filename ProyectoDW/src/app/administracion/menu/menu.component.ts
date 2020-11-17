import { Component, OnInit } from '@angular/core';
import { MenuAdminService } from './../../servicios/menu-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  constructor(public menuAdmin: MenuAdminService, private router: Router) {
  }
  
  ngOnInit(): void {}

  inicio() {
    this.menuAdmin.inicio=true;
    this.menuAdmin.pagos=false;
    this.menuAdmin.usuarios=false;
    this.menuAdmin.planes=false;
    this.menuAdmin.plantillas = false;

    }

  pagos() {
    this.menuAdmin.pagos=true;
    this.menuAdmin.inicio=false;
    this.menuAdmin.usuarios=false;
    this.menuAdmin.planes=false;
    this.menuAdmin.plantillas=false;
  }
  usuarios() {
    this.menuAdmin.usuarios=true;
    this.menuAdmin.pagos=false;
    this.menuAdmin.inicio=false;
    this.menuAdmin.planes=false;
    this.menuAdmin.plantillas=false;

  }
  planes() {
    this.menuAdmin.planes=true;
    this.menuAdmin.inicio=false;
    this.menuAdmin.usuarios=false;
    this.menuAdmin.plantillas=false;
    this.menuAdmin.pagos=false;
  }
  plantillas() {
    this.menuAdmin.plantillas=true;
    this.menuAdmin.inicio=false;
    this.menuAdmin.usuarios=false;
    this.menuAdmin.planes=false;
    this.menuAdmin.pagos=false;
  }

}
