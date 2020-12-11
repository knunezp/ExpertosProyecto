import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm,  FormControl, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { PlanService } from 'src/app/servicios/plan.service';

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

  planes:any=[];

  plan = {
    precio: 0,
    descripcion: 'No sera facturado hoy',
    paginas: 1,
    cantidadProductos: 1,
    tipo: ''
  };

  public data = [
    {precio: 0.0, fechaFacturacion: 'No sera facturado hoy', descripcion:'antes de que expire su prueba gratis',paginas:3,productos: 20,tipo:'mensual'},
    {precio: 10.0, fechaFacturacion: 'No sera facturado hoy', descripcion:'Cancele en cualquier momento',paginas:8,productos: 40 ,tipo:'mensual'},
    {precio: 15.0, fechaFacturacion: 'No sera facturado hoy', descripcion:'Cancele en cualquier momento',paginas:10,productos: 60 ,tipo:'mensual'},
    {precio: 20.0, fechaFacturacion: 'No sera facturado hoy', descripcion:'Cancele en cualquier momento',paginas:20,productos: 100,tipo:'mensual'},
];



  public constructor(
    private http:HttpClient,
    private spinner: NgxSpinnerService,
    private planService:PlanService) {

  }

  ngOnInit():void {

    //obtener todos los planes
    this.planService.obtenerPlan().subscribe(
      res=>{
        this.planes = res;
        console.log("planes: ", this.planes);
      },
      error=>{
        console.log(error);
      }
    );

    this.total=this.planes.length;
    console.log(this.planes.length);

  }

  onPageChange(event){
     /** spinner starts on init */
    this.spinner.show();
    this.p=event;
    setTimeout(() => {
       /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
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

      this.planService.crearPlan(this.plan);

      this.cerrarModal();
      //this.data.push(f.value);
      console.log('Plan ',this.plan);
    }
  }

  eliminarPlan(plan){
    console.log('eliminar',plan);
  }

  editarPlan(planEditar){
    console.log('editar',planEditar);
  }
}
