import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.css'],
  providers: [DecimalPipe],
})
export class ExercicioPipesComponent {

  constructor(
    private decimalPipe: DecimalPipe
  ){  }

  filme = {
    titulo:'Lord of the ring',
    estrelas: 4.33322,
    precoAluguel: 15.45,
    dataLancamento: new Date(2017, 10, 12),    
  }

  compras=[{
    produto: 'Lampada',
    valor: 299.29,
    qtd: 2,
    peso: 0,
    data: new Date(2022, 4, 12, 13,20)
  },{
    produto: 'Farinha',
    valor: 450.29,
    qtd: 3,
    peso: 29.4839 , 
    data: new Date(2022, 4, 11, 11,11)
    }
]

  getPesoFormatado(peso: number){
    if(peso <= 0){
      return 'Sem peso'
    }
    return this.decimalPipe.transform(peso, '1.1-2')+' Kgs';
  }

}
