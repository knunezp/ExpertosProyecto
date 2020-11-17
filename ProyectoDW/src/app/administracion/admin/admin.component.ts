import { Component, OnInit } from '@angular/core';
import { MenuAdminService } from './../../servicios/menu-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(public menuAdmin: MenuAdminService,private router: Router) {
    this.menuAdmin.inicio=true;
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
