import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Teste} from './teste/teste';

const routes: Routes = [
  {
      path: 'teste', component: Teste
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {}
