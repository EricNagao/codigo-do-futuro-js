import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExercicioContadorComponent } from './exercicio-contador/exercicio-contador.component';
import { ExercicioDataBindingComponent } from './exercicio-data-binding/exercicio-data-binding.component';
import { ExercicioDiretirvasComponent } from './exercicio-diretirvas/exercicio-diretirvas.component';
import { ExercicioNgClassComponent } from './exercicio-ng-class/exercicio-ng-class.component';
import { ExercicioPipesComponent } from './exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
//import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations:[
    FooterComponent,
    HeaderComponent,
    ExercicioContadorComponent,
    ExercicioDataBindingComponent,
    ExercicioDiretirvasComponent,
    ExercicioNgClassComponent,
    ExercicioPipesComponent,
    
  ],

  imports: [
    CommonModule,
    RouterModule,
  ],

  exports: [
    FooterComponent,
    HeaderComponent,
    ExercicioContadorComponent,
    ExercicioDataBindingComponent,
    ExercicioDiretirvasComponent,
    ExercicioNgClassComponent,
    ExercicioPipesComponent,
    CustomElementRegistry,
  ],
  //providers: [{
//    provide: HTTP_INTERCEPTORS,
  //  useClass: AuthInterceptor,
   // multi: true,
  //}]    
})

export class SharedModule { }
