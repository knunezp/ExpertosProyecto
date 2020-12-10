import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../servicios/plan.service';
import { Router } from '@angular/router';
import { faPlus,faStar,faPaperPlane,faCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styles: []
})
export class PlanesComponent implements OnInit {
  faCheck=faCheck;

  planes:any=[];


  constructor(private planService:PlanService,
    private router: Router) { }

  ngOnInit(): void {

    this.planService.plan=false;

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
  }

  //mostrar opcion de spago
  mostrarPlan(planE: any) {
    this.planService.planSeleccionado = planE;
    this.planService.plan= true;
    this.router.navigateByUrl('pago');
  }


}
