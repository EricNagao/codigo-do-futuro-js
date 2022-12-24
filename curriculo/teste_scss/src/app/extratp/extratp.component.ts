import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ExtratoService } from './extrato.service';
import { Transacao } from './extratp.interface';


@Component({
  selector: 'app-extratp',
  templateUrl: './extratp.component.html',
  styleUrls: ['./extratp.component.scss']
})

export class ExtratpComponent implements OnInit {

  /*transacoes=[{
    id: 1,
    data: "2020-02-04T13:00:24.744Z",
    descricao: "Salário",
    valor: 3500,
    categoria: "Salário"
  }, {
    id: 2,
    data: '2020-02-05T14:21:24.744Z',
    descricao: 'Sapato Verde',
    valor: -235.99,
    categoria: 'Vestuário'
  }, {
    id: 3,
    data:'2020-01-29T15:00:24.744Z',
    descricao:'Notebook',
    valor: -10231.99,
    categoria: 'Eletrônicos'

  }] ;*/

  transacoes: Transacao[] | undefined;
  estaCarregando: boolean | undefined;
  erroNoCarregamento: boolean | undefined
  
  constructor(
    private extratoService: ExtratoService
  
  ) { }

  ngOnInit(){
    this.carregarExtrato();
  }
  
  carregarExtrato(){
    this.estaCarregando = true;
    this.erroNoCarregamento=false;

    this.extratoService.getTransacoes()
    .pipe(
      finalize(()=> this.estaCarregando =false)
    )
      .subscribe(
        response => this.onSucces(response),
        error => this.onError(error),
      );
    }
  

  onSucces(response: Transacao[]){
    this.estaCarregando =false;
    this.transacoes =response;
  }
  onError(error: any[]){
    this.estaCarregando =false;
    this.erroNoCarregamento =true;
  }
}
