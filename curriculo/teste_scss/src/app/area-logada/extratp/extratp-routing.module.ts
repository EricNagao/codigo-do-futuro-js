import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratpComponent } from './extratp.component';

const routes: Routes = [{
  path:'',
  component: ExtratpComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtratoRoutingModule { }
