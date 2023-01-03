import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioContadorComponent } from './exercicio-contador/exercicio-contador.component';
import { ExercicioDataBindingComponent } from './exercicio-data-binding/exercicio-data-binding.component';
import { ExercicioDiretirvasComponent } from './exercicio-diretirvas/exercicio-diretirvas.component';
import { ExercicioNgClassComponent } from './exercicio-ng-class/exercicio-ng-class.component';
import { ExercicioPipesComponent } from './exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ExercicioContadorComponent,
    ExercicioDataBindingComponent,
    ExercicioDiretirvasComponent,
    ExercicioNgClassComponent,
    SharedModule,
    ExercicioPipesComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
  ],

  exports: [
    FooterComponent,
    HeaderComponent,
    ExercicioContadorComponent,
    ExercicioDataBindingComponent,
    ExercicioDiretirvasComponent,
    ExercicioNgClassComponent,
    ExercicioPipesComponent,
    SharedModule,
    CustomElementRegistry,
    
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class SharedModule {
}
