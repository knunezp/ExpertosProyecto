import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco-img',
  templateUrl: './banco-img.component.html',
  styleUrls: ['./banco-img.component.css']
})
export class BancoImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirModal(){
    //$('#img').modal('show');
  }

}
