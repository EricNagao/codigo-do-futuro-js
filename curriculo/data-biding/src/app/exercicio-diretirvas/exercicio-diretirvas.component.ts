import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretirvas',
  templateUrl: './exercicio-diretirvas.component.html',
  styleUrls: ['./exercicio-diretirvas.component.css']
})
export class ExercicioDiretirvasComponent {

  listaFrutas =[
    'Maçã',
    'Banana',
    'Abacate',
    'pera',
    'Ameixa',
    'Jabuticaba',
  ];

    carrosLista =[{
      placa: 'SDF-2344',
      cor: "PRETO",
    },{
      placa:'JJGS-4344',
      cor:'AZUL',
    },{
      placa:'KPP-0003',
      cor:'CINZA',
    },{
      placa: 'ROO-2332',
      cor:'ROXO ',
    }]
  
  deveExibir=true;

  trocarValor(){
    this.deveExibir =! this.deveExibir;
  }

  soma(n1:any, n2 :any){
    return n1+n2;
  }


}
;