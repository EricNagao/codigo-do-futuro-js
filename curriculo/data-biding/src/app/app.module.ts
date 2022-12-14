import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExercicioDataBindingComponent } from './Components/exercicio-data-binding/exercicio-data-binding.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExercicioContadorComponent } from './Components/exercicio-contador/exercicio-contador.component';
import { ExercicioDiretirvasComponent } from './Components/exercicio-diretirvas/exercicio-diretirvas.component';
import { ExercicioNgClassComponent } from './Components/exercicio-ng-class/exercicio-ng-class.component';
import { ExercicioPipesComponent } from './Components/exercicio-pipes/exercicio-pipes.component';
import { parseTemplate } from '@angular/compiler';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';

registerLocaleData(localePt, 'pt')

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
    ExercicioPipesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
  ],

  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'}],

  bootstrap: [AppComponent]
})
export class AppModule { }
