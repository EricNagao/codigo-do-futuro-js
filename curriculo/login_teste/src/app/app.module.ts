import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ExtratoComponent } from './extrato/extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
