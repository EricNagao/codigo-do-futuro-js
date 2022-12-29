import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratpComponent } from './extratp/extratp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/Logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao logado/nao-esta-logado.guard';

const routes: Routes = [ {
      path: 'home',
      component: HomeComponent,
      canActivate: [EstaLogadoGuard],
    }, {
      path: 'extrato',
      component: ExtratpComponent,
      canActivate: [EstaLogadoGuard],

    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },{
      path: 'login',
      component: LoginComponent,
      canActivate: [NaoEstaLogadoGuard]
    },{
    path: 'contatos',
    loadChildren: () => import('./contatos/contatos.module').then(m=> m.ContatosModule),
    canActivate: [EstaLogadoGuard],

    },{
      path: '',
      component: NaoEncontradoComponent,
    }];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
