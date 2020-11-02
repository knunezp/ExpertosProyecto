import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  opened=true;
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }
  toggleSidebar(){
    this.opened=!this.opened;
  }

}
