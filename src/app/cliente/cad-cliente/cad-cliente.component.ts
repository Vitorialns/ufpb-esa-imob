//<reference path="../cliente.ts"/>
import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../servico/cliente.service'

//import { ClienteService } from '../cliente.service';



@Component({
  selector: 'app-cad-cliente',
  templateUrl: './tela-cadastro.html',
  styleUrls: ['./cad-cliente.component.css']
})
export class CadClienteComponent implements OnInit {
  f: any;
  private cliente:Cliente;
  //pessoaList
  tiposPessoa = ["Pessoa Fisica", "Pessoa Juridica"]
  tiposCliente = ["Locador", "Locatário"]
  constructor(
    private router: Router,
    private clienteService:ClienteService
  ) { }
  
  ngOnInit() {
    this.cliente=this.clienteService.getter();
  }

  onSubmit(f: any) {
      this.cliente.nome=f.nome;
      this.cliente.tipo1=f.tipo1;
      this.cliente.tipo2=f.tipo2;
      this.cliente.cpfcnpj=f.cpfcnpj;
      this.cliente.datanascimento=f.datanascimento;
      this.cliente.profissao=f.profissao;
      this.cliente.rg=f.rg;
      this.cliente.orgao=f.orgao;
      this.cliente.rua=f.endereco;
      this.cliente.estado=f.ufcliente;      
      this.cliente.bairro=f.bairro;
      this.cliente.numero=f.numero;
      this.cliente.cidade=f.cidade;
      this.cliente.cep=f.cep;
      this.cliente.email=f.email;
      this.cliente.telefone1=f.telefone1;
      this.cliente.telefone2=f.telefone2;
      this.cliente.telefone3=f.telefone3;
      this.cliente.ufrg=f.ufrg;
      this.clienteService.createCliente(this.cliente).subscribe((cliente) => {
      this.router.navigate(['clientes']);
      }, (error) => {
        console.log(error);
      });
  }
  
}

