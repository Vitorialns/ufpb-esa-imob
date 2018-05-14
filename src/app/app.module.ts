import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { CadClienteComponent } from './cliente/cad-cliente/cad-cliente.component';
import { ListClienteComponent } from './cliente/list-cliente/list-cliente.component';
import { EditClienteComponent } from './cliente/edit-cliente/edit-cliente.component';
import { ShowClienteComponent } from './cliente/show-cliente/show-cliente.component';
import { RouterModule, Routes } from '@angular/router';
import { routes, RouteRoutingModule } from './route-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadImovelComponent } from './imovel/cad-imovel/cad-imovel.component';
import { EditImovelComponent } from './imovel/edit-imovel/edit-imovel.component';
import { ListImovelComponent } from './imovel/list-imovel/list-imovel.component';
import { ShowImovelComponent } from './imovel/show-imovel/show-imovel.component';
import { ImovelService } from './servico/imovel.service';
import { MatIconModule} from '@angular/material';
import { ClienteService } from './servico/cliente.service'

;
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    CadClienteComponent,
    ListClienteComponent,
    EditClienteComponent,
    ShowClienteComponent,
    CadImovelComponent,
    EditImovelComponent,
    ListImovelComponent,
    ShowImovelComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouteRoutingModule,
    Ng2SearchPipeModule,
    NgbModule.forRoot(),
    MatIconModule,
    HttpModule


  ],

  providers: [ClienteService, ImovelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
