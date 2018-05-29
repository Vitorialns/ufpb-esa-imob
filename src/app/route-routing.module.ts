
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
import { ContratoComponent } from './contrato/cad-contrato/contrato.component';
import { EditContratoComponent } from './contrato/edit-contrato/edit-contrato.component';
import { ListContratoComponent } from './contrato/list-contrato/list-contrato.component';
import { ShowContratoComponent } from './contrato/show-contrato/show-contrato.component';
//import { CadParcelaComponent } from './parcelas/cad-parcela/cad-parcela.component';
//import { ShowParcelaComponent } from './parcelas/show-parcela/show-parcela.component';
import { CadOrdemcompraComponent } from './ordem-compra/cad-ordemcompra/cad-ordemcompra.component';
import { ListOrdemcompraComponent } from './ordem-compra/list-ordemcompra/list-ordemcompra.component';
import { EditOrdemcompraComponent } from './ordem-compra/edit-ordemcompra/edit-ordemcompra.component';
import { ShowOrdemcompraComponent } from './ordem-compra/show-ordemcompra/show-ordemcompra.component';
import { CadOrdemservicoComponent } from './ordem-servico/cad-ordemservico/cad-ordemservico.component';
import { ListOrdemservicoComponent } from './ordem-servico/list-ordemservico/list-ordemservico.component';
import { ShowOrdemservicoComponent } from './ordem-servico/show-ordemservico/show-ordemservico.component';
import { EditOrdemservicoComponent } from './ordem-servico/edit-ordemservico/edit-ordemservico.component';
import { ListParcelaComponent } from './contrato/list-parcela/list-parcela.component';
import { ShowParcelaComponent } from './contrato/show-parcela/show-parcela.component';


export const routes: Routes = [
  { path: "clientes", component: ListClienteComponent},
  { path: 'clientes/new', component: CadClienteComponent },
  { path: 'clientes/:id', component: ShowClienteComponent },
  { path: 'clientes/:id/edit', component: EditClienteComponent },

  { path: 'imoveis', component: ListImovelComponent },
  { path: 'imoveis/new', component: CadImovelComponent },
  { path: 'imoveis/:id', component: ShowImovelComponent },
  { path: 'imoveis/:id/edit', component: EditImovelComponent },

  { path: 'contratos', component: ListContratoComponent },
  { path: 'contratos/new', component: ContratoComponent },
  { path: 'contratos/:id', component: ShowContratoComponent },
  { path: 'contratos/:id/edit', component: EditContratoComponent },

  {path: 'parcelas', component: ListParcelaComponent},
  {path: 'parcelas/:id', component: ShowParcelaComponent},

  { path: 'ordensc', component: ListOrdemcompraComponent },
  { path: 'ordemc/new', component: CadOrdemcompraComponent },
  { path: 'ordemc/:id', component: ShowOrdemcompraComponent },
  { path: 'ordemc/:id/edit', component: EditOrdemcompraComponent },

  { path: 'ordenss', component: ListOrdemservicoComponent },
  { path: 'ordems/new', component: CadOrdemservicoComponent },
  { path: 'ordems/:id', component: ShowOrdemservicoComponent },
  { path: 'ordems/:id/edit', component: EditOrdemservicoComponent  },

  {
    path: '#/**',
    component: ListImovelComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }

