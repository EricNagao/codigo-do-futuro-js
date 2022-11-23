import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.css']
})
export class ExercicioDataBindingComponent implements OnInit {

  imageURL= "https://m.media-amazon.com/images/I/61Foj5U3jqL._AC_SX679_.jpg"

  constructor() { }

  ngOnInit(): void {
  }

  getImageURL (){
    return this.imageURL;
  }

}
