import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { finalize, pipe, take } from 'rxjs';
import { Contato } from '../contato.interface';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './listar-contatos.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class listarContatosComponent implements OnInit {
  estaCarregando: boolean = false;
  erroNoCarregamento: boolean = false;
  contatos: Contato[] | undefined;

  constructor(
    private ContatoService: ContatoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos(){
    this.estaCarregando =true;
    this.erroNoCarregamento =false;
    
    this.ContatoService.getContatos()
      .pipe(
        take(1),
        finalize(()=> this.estaCarregando=false)
      )
      
      .subscribe(
      response => this.onSucess(response),
      error => this.onError(error),
      );
  }
  
  onSucess(response: Contato[]){
    this.contatos=response;

  }
  onError(error: any){
    this.estaCarregando =false;
    this.erroNoCarregamento =true;
  }
  irParaDetalhes(idContato: number) {
    this.router.navigate([`contatos/${idContato}`]);
  }
}
