import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { PlanService } from '../servicios/plan.service';

@Injectable({
  providedIn: 'root'
})
export class PlanGuard implements CanActivate {

 
  constructor(public planService: PlanService) { }

  canActivate(): boolean {
    if (this.planService.plan === true) {
      return true;
    } else {
      return false;
    }
  }

}
