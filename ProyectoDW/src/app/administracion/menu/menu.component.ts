import { Component, OnInit } from '@angular/core';
import { MenuAdminService } from './../../servicios/menu-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(public menuAdmin: MenuAdminService,private router: Router) { }

  ngOnInit(): void {
  }

}
