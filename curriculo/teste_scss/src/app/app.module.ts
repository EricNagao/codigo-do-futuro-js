import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtratpComponent } from './area-logada/extratp/extratp.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { FooterComponent } from './shared/footer/footer.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CadastroComponent } from './area-logada/cadastro/cadastro.component';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { shareModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


registerLocaleData(localePt, 'pt');
    
@NgModule
(
    {
        declarations: [
            AppComponent,
            ExtratpComponent,
            NaoEncontradoComponent,
            HeaderComponent,
            FooterComponent,
            CadastroComponent,
        ],
        
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            NgbModule,
        ],

        providers: [{
            provide: LOCALE_ID,
            useValue: 'pt'
        }],

        bootstrap: [AppComponent],
    
    })

export class AppModule { }
