import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-exercicio-ng-class',
  templateUrl: './exercicio-ng-class.component.html',
  styleUrls: ['./exercicio-ng-class.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ExercicioNgClassComponent implements OnInit {

  deveSerVerde = false
  tornarVerde(){
    return this.deveSerVerde = true 
  }

  deveSerVermelho = false
  tornarVermelho(){
    return this.deveSerVermelho = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
