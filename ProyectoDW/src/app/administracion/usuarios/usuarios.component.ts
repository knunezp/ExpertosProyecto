import { Component,OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements  OnInit {

  
  p: number = 1;
  total:number=0;
  
  public data = [
    {name: 'test1', email: 'test@gmail.com', website:'test.com'},
    {name: 'test2', email: 'test@gmail.com', website:'test.com'},
    {name: 'test3', email: 'test@gmail.com', website:'test.com'},
    {name: 'test4', email: 'test@gmail.com', website:'test.com'},
];



  public constructor(private http:HttpClient,private spinner: NgxSpinnerService) {
  
  }
 

 

  ngOnInit():void {
    this.total=this.data.length;
    console.log(this.data.length);
  }

  onPageChange(event){
     /** spinner starts on init */
    this.spinner.show();
    this.p=event;
    setTimeout(() => {
       /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }
}
