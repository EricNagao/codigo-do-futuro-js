import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.css']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra: any;
  @Input() color: any;
  @Output() clicado = new EventEmitter

  imageURL= "https://m.media-amazon.com/images/I/61Foj5U3jqL._AC_SX679_.jpg"
  inicialValue = 'Valor Inicial';
  isDisabled = true;
  accessibilyTest ="Um texto acessivel"
  valorDoInput= ''


  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log ('isDisabled: ', this.isDisabled);
    }, 3000 );
   }

  ngOnInit(): void {
  }

  getImageURL (){
      return this.imageURL; 
        } 
  onClick($event: any){
        console.log ('clicou', $event);
        }
  digitouAlgo($event:any){
    this.valorDoInput = $event.target.value;
    console.log($event)
  }   
  
  onClickBotaoEissor(){
    console.log("Devo emitir info do compo. PAI");
    this.clicado.emit();
  }
  eventoRecebido($event:any){
    console.log('AppComponemt: Evento recebido!', $event)    
  }

}
