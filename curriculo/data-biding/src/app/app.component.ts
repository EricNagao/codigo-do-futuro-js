import localePt from '@angular/common/locales/pt';
import{registerLocaleData} from '@angular/common';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  
}];


registerLocaleData(localePt,'pt')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  
  title = 'Seja Bem Vindo - WellCome'
  favoriteColor = 'black';
  palavra = 'Star'
  color ='gray'

  constructor(){}

    eventoRecebido($event:any){
      console.log('AppComponemt: Evento recebido!', $event);
    }

    onValorAtualizadoContador(novoValor:any){
      console.log('onValorAtualizadoContador', novoValor);
    }
}
