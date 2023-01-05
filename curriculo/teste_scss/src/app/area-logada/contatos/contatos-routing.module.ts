import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { listarContatosComponent } from './Listar_contatos/listar-contatos.component';


const routes: Routes = [{
  path: '',
  component:listarContatosComponent,
}, {
  path: 'novo',
  component: listarContatosComponent
}, {
  path: ':id',
  component: DetalhesContatoComponent,
}, {
  path: ':id/editar',
  component:DetalhesContatoComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }