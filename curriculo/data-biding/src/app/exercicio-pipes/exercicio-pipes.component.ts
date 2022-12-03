import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.css']
})
export class ExercicioPipesComponent {

  filme = {
    titulo:'Lord of the ring',
    estrelas: 4.33322,
    precoAluguel: 15.45,
    dataLancamento: new Date(2017, 10, 12),    
  
  }

}
