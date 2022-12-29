import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listarContatosComponent } from './Listar_contatos/listar-contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';

const routes: Routes = [{
  path:'',
  component: listarContatosComponent
},{
  path:'id',
  component: DetalhesContatoComponent,

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
