import { Component, OnInit } from '@angular/core';
import { PlanService } from './../../servicios/plan.service';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styles: []
})
export class PagoComponent implements OnInit {

  constructor(public planService: PlanService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
