import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm,  FormControl, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

declare let $: any;



@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  p: number = 1;
  total:number=0;


  mensaje:boolean=false;
  prueba: string = "";
  empresa: string = "";

  plan = {
    precio: 0,
    fechaFacturacion:'No sera facturado hoy',
    descripcion: '',
    paginas: 1,
    productos: 1,
    tipoPlan: ''
  };

  public data = [
    {precio: 0.0, fechaFacturacion: 'No sera facturado hoy', descripcion:'antes de que expire su prueba gratis',paginas:3,productos: 20,tipo:'mensual'},
    {precio: 10.0, fechaFacturacion: 'No sera facturado hoy', descripcion:'Cancele en cualquier momento',paginas:8,productos: 40 ,tipo:'mensual'},
    {precio: 15.0, fechaFacturacion: 'No sera facturado hoy', descripcion:'Cancele en cualquier momento',paginas:10,productos: 60 ,tipo:'mensual'},
    {precio: 20.0, fechaFacturacion: 'No sera facturado hoy', descripcion:'Cancele en cualquier momento',paginas:20,productos: 100,tipo:'mensual'},
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

  cerrarModal(){
    $('#nuevoPlan').modal('hide');
  }

  abrirModal(){
    $('#nuevoPlan').modal('show');
  }


  /*Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])*/
  //crear usuario
  nuevoPlan(f: NgForm) {
    if (f.invalid) {
      this.mensaje=true;
      console.log('No estan todos los campos  ');
    } else {
      //$('#contacto').modal('hide');
      console.log('plan registrado  ',f.value);
      this.cerrarModal();
      this.data.push(f.value);
      console.log(this.data);
    }
  }
}
