import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratpComponent } from './area-logada/extratp/extratp.component';
import { HomeComponent } from './area-logada/home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/Logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao logado/nao-esta-logado.guard';

const routes: Routes = [ {
    path: 'area-logada',
    loadChildren:()=> import('./area-logada/area-logada.module').then(m=>m.AreaLogadaModule),
    canActivate: [EstaLogadoGuard],
    },{
      path: 'home',
      loadChildren:()=> import('./area-logada/home/home.module').then(m=>m.HomeModule),
      canActivate: [EstaLogadoGuard],
    }, {
      path: 'extrato',
      loadChildren:()=> import('./area-logada/extratp/extratp.component').then(m=>m.ExtratpComponent),
      canActivate: [EstaLogadoGuard],
    },{
      path: 'contatos',
      loadChildren: () => import('./area-logada/contatos/contatos.module').then(m=> m.ContatosModule),
      canActivate: [EstaLogadoGuard],
      },{
      path: '',
      redirectTo: 'area-logada',
      pathMatch: 'full',
    },{
      path: 'login',
      component: LoginComponent,
      canActivate: [NaoEstaLogadoGuard]
    },{
      path: '',
      component: NaoEncontradoComponent,
    }];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
