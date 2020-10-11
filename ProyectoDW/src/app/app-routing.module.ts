import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';

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
    import('./componentes/perfil-usuario/perfil-usuario.module').then(m => PerfilUsuarioComponent)
  },
  {path: '', pathMatch: 'full', redirectTo: 'inicio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
