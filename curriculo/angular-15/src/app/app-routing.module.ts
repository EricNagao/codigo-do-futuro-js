import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/Logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao logado/nao-esta-logado.guard';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./area-logada/area-logada.module').then(m => m.AreaLogadaModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  canActivate: [NaoEstaLogadoGuard],
}, {
  path: '**',
  component: NaoEncontradoComponent
},{
  path: 'contatos',
  loadChildren: () => import('./area-logada/contatos/contatos.module').then(m=>m.ContatosModule),
  canActivate: [EstaLogadoGuard],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }