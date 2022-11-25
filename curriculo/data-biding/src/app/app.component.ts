import { Component } from '@angular/core';

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
}
