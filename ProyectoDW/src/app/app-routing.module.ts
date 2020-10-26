import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'inicio', loadChildren: () =>
    import('./componentes/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'crearUsuario', loadChildren: () =>
    import('./componentes/crear-usuario/crear-usuario.module').then(m => m.CrearUsuarioModule)
  },
  {
    path: 'planes', loadChildren: () =>
    import('./componentes/planes/planes.module').then(m=> m.PlanesModule)
  },
  {
    path: 'perfilUsuario', loadChildren: () =>
    import('./componentes/perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioModule)
  },
  {
    path: 'pago', loadChildren: () =>
    import('./componentes/pago/pago.module').then(m => m.PagoModule)
  },
  {
    path: 'principal', loadChildren: () =>
    import('./componentes/principal/principal.module').then(m => m.PrincipalModule)
  },
  {path: '', pathMatch: 'full', redirectTo: 'inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
