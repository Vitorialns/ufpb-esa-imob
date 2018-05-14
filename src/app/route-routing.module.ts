
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { CadClienteComponent } from './cliente/cad-cliente/cad-cliente.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { CadImovelComponent } from './imovel/cad-imovel/cad-imovel.component';
import { EditImovelComponent } from './imovel/edit-imovel/edit-imovel.component';
import { ListImovelComponent } from './imovel/list-imovel/list-imovel.component';
import { ShowImovelComponent } from './imovel/show-imovel/show-imovel.component';

export const routes: Routes = [
  { path: "clientes", component: ListClienteComponent},
  { path: 'clientes/new', component: CadClienteComponent },
  { path: 'clientes/:id', component: ShowClienteComponent },
  { path: 'clientes/:id/edit', component: EditClienteComponent },

  { path: 'imoveis', component: ListImovelComponent },
  { path: 'imoveis/new', component: CadImovelComponent },
  { path: 'imoveis/:id', component: ShowImovelComponent },
  { path: 'imoveis/:id/edit', component: EditImovelComponent },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**',
    component: ListImovelComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
