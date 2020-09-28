import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:"inicio",loadChildren:()=>
    import("./componentes/inicio/inicio.module").then(m=>m.InicioModule)
  },
  {path:"",pathMatch:"full",redirectTo:"inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
