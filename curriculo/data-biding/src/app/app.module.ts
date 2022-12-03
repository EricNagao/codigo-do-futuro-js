import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExercicioDataBindingComponent } from './exercicio-data-binding/exercicio-data-binding.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExercicioContadorComponent } from './exercicio-contador/exercicio-contador.component';
import { ExercicioDiretirvasComponent } from './exercicio-diretirvas/exercicio-diretirvas.component';
import { ExercicioNgClassComponent } from './exercicio-ng-class/exercicio-ng-class.component';
import { ExercicioPipesComponent } from './exercicio-pipes/exercicio-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioDataBindingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExercicioContadorComponent,
    ExercicioDiretirvasComponent,
    ExercicioNgClassComponent,
    ExercicioPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
