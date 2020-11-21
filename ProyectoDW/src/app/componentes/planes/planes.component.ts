import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styles: []
})
export class PlanesComponent implements OnInit {


  public data = [
    {precio: 0.0, fechaFacturacion: 'No sera facturado hoy', opcion:'Cancele en cualquier momento antes de que expire su prueba gratis',paginas:'Crea 3 paginas gratis',cantidadProductos:'En cada pagina podras ofrecer 20 productos',tipo:'mensual'},
    {precio: 10.0, fechaFacturacion: 'No sera facturado hoy', opcion:'Cancele en cualquier momento',paginas:'Crea 8 paginas',cantidadProductos:'En cada pagina podras ofrecer 40 productos',tipo:'mensual'},
    {precio: 15.0, fechaFacturacion: 'No sera facturado hoy', opcion:'Cancele en cualquier momento',paginas:'Crea 10 paginas',cantidadProductos:'En cada pagina podras ofrecer 60 productos',tipo:'mensual'},
    {precio: 20.0, fechaFacturacion: 'No sera facturado hoy', opcion:'Cancele en cualquier momento',paginas:'Crea 20 paginas',cantidadProductos:'En cada pagina podras ofrecer 100 productos',tipo:'mensual'},
];

  constructor() { }

  ngOnInit(): void {
  }

}
