import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtratpComponent } from './extratp/extratp.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { FooterComponent } from './shared/footer/footer.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { SharedModule } from './shared/shared.module';


registerLocaleData(localePt, 'pt');
    
@NgModule
(
    {
        declarations: [
            AppComponent,
            HomeComponent,
            LoginComponent,
            ExtratpComponent,
            NaoEncontradoComponent,
            HeaderComponent,
            FooterComponent,
        ],
        
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            
        ],

        providers: [{
            provide: LOCALE_ID,
            useValue: 'pt'}],

        bootstrap: [AppComponent],

        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }
)
export class AppModule { }
