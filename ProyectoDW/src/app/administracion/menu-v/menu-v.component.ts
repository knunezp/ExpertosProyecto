import { Component, OnInit } from '@angular/core';
import { MenuAdminService } from './../../servicios/menu-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-v',
  templateUrl: './menu-v.component.html',
  styleUrls: ['./menu-v.component.css']
})
export class MenuVComponent implements OnInit {

  constructor(public menuAdmin: MenuAdminService,private router: Router) { }

  ngOnInit(): void {
  }

}
