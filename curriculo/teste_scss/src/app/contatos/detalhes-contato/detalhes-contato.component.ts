import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from '../contato.interface';
import { ContatoService } from '../contato.service';


@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {
  contato!: Contato;
  estaCarregando: boolean = false;
  erroNoCarregamento: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private ContatoService: ContatoService,
    private router: Router
    ) { }

  ngOnInit() {
    const idContato = this.route.snapshot.paramMap.get('id');
    this.carregarContato(idContato);
  }

  carregarContato(idContato: any){
    this.ContatoService.getContato(idContato)
    .subscribe(
      response => this.onSuccess(response),
      //error => this.onError(error),
    )
  }
  onSuccess (response: Contato){
      this.contato=response;
      console.log(this.contato)
  }

  voltar(){
    this.router.navigate([`contatos`]);
  }
}
