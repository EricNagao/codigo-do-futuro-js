import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretirvas',
  templateUrl: './exercicio-diretirvas.component.html',
  styleUrls: ['./exercicio-diretirvas.component.css']
})
export class ExercicioDiretirvasComponent {

  deveExibir=true;

  trocarValor(){
    this.deveExibir =! this.deveExibir;
  }

  soma(n1:any, n2 :any){
    return n1+n2;
  }

}
