import { Component, OnInit , ViewChild, Renderer2, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  mensaje:Boolean;
  prueba:any;  
  plantilla={
    titulo:"",
    descripcion:"",
    navbar:"",
    imagen:"",
    color:""
  }
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  guardarPlantilla(forma: NgForm){

    if (forma.invalid) {
      this.mensaje=true;
      this.prueba="<b>Escribe todo el contenido que quieras</b>";
    }else{
      console.log(forma.value);
    }
  }

  eventoClick = null;

  agregar() {
    const div: HTMLDivElement = this.renderer.createElement('div');
    div.className = "col-md-12";

    div.innerHTML =
      '<div class="row"><div class="col-5 mt-2 pr-0"><div class="input-group"><div class="input-group-prepend"><span class="input-group-text inputMini" id="inputGroup-sizing-default">IMEI</span></div><input type="text" class="form-control inputMini" aria-label="Default" aria-describedby="inputGroup-sizing-default"></div></div><div class="col-5 mt-2 pr-0"><div class="input-group"><div class="input-group-prepend"><span class="input-group-text inputMini" id="inputGroup-sizing-default">BUZÓN</span></div><input type="text" class="form-control inputMini" aria-label="Default" aria-describedby="inputGroup-sizing-default"></div></div><div class="col-2 pr-0 d-flex-left-center"><button id="AGREGAR-EVENTO" class="btn rounded-circle " >Boton<em class="fa fa-times"></em></button></div></div>';
    console.log(2);
    this.renderer.appendChild(document.getElementById("addDevice"), div);

    this.eventoClick = this.renderer.listen(
      document.getElementById("AGREGAR-EVENTO"),
      "click",
      evt => {
        this.removeDevice(evt);
      }
    );
  }

  removeDevice(event) {
    console.log(event);
  }

 
}
