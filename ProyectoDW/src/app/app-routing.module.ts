import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
   {
    path: 'landingPage', loadChildren: () =>
    import('./componentes/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'inicio', loadChildren: () =>
    import('./componentes/inicio/inicio.module').then(m => m.InicioModule)
  },
  {path: '', pathMatch: 'full', redirectTo: 'landingPage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
