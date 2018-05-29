import { Component, OnInit } from '@angular/core';
import { ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ImovelService } from '../../servico/imovel.service'
import { Imovel } from '../../model/imovel'
import { Contrato } from '../../model/contrato';
import { Cliente } from '../../model/cliente';
import { ContratoService } from '../../servico/contrato.service';
import { ClienteService } from '../../servico/cliente.service';
import { FilterdataPipe } from '../../filterdata.pipe';

@Component({
  selector: 'app-list-imovel',
  templateUrl: './list-imovel.component.html',
  styleUrls: ['./list-imovel.component.css']
})
export class ListImovelComponent implements OnInit {
  private todosImoveis:Imovel[];
  private todosClientes:Cliente[];
  private todosContratos:Contrato[];
  private contrato: Contrato;
  private cliente: Cliente;
  private imovel: Imovel;
  constructor(
    private router:Router,
    private imovelService: ImovelService,
    private contratoService:ContratoService,
    private clienteService:ClienteService,
  ) { }

  ngOnInit() {
    this.imovelService.getImoveis().subscribe((todosImoveis) => {
      this.todosImoveis=todosImoveis;
      console.log(todosImoveis)
    },(error) => {
      console.log(error);
    })

    this.clienteService.getClientes().subscribe((todosClientes) => {
      this.todosClientes=todosClientes;
      
    },(error) => {
      console.log(error);
    })

    
  }

  show(imovel) {
    this.imovelService.setter(imovel);
    this.router.navigate(['/imoveis/', imovel.id]);
  }

  gerarContrato(imovel) {
    this.imovelService.setter(imovel);
    this.cliente=this.clienteService.getter();
    this.router.navigate(['contratos/new']);
  }

  

}
