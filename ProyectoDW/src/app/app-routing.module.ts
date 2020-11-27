import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

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
    import('./componentes/planes/planes.module').then(m=> m.PlanesModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'perfilUsuario', loadChildren: () =>
    import('./componentes/perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'pago', loadChildren: () =>
    import('./componentes/pago/pago.module').then(m => m.PagoModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'principal', loadChildren: () =>
    import('./componentes/principal/principal.module').then(m => m.PrincipalModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'admin', loadChildren: () =>
    import('./administracion/admin/admin.module').then(m => m.AdminModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'loginAdmin', loadChildren: () =>
    import('./administracion/login-admin/login-admin.module').then(m => m.LoginAdminModule)
  },
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
