import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { listarContatosComponent } from './Listar_contatos/listar-contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';


@NgModule({
  declarations: [
    listarContatosComponent,
    DetalhesContatoComponent,

  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
  ]
})
export class ContatosModule { }
