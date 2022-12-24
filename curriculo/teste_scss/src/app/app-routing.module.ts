import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratpComponent } from './extratp/extratp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [{
      path: 'login',
      component: LoginComponent,
    }, {
      path: 'home',
      component: HomeComponent,
    }, {
      path: 'extrato',
      component: ExtratpComponent,
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },{
      path: '',
      component: NaoEncontradoComponent,
    }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
