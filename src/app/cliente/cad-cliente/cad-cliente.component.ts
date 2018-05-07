///<reference path="../cliente.ts"/>
import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { bancocontroller } from '../dataService';




@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})
export class CadClienteComponent {

  //pessoaList
  tiposPessoa = ["Pessoa Fisica", "Pessoa Juridica"]
  tiposCliente = ["Locador", "Locatário"]
  constructor(private router: Router, private cadastroService: ClienteService) { }
  

  onSubmit(f: any) {
    const cliente = this.cadastroService.add(new Cliente(
      f.nomeBairro,
      f.numeroCEP,
      f.nomeCidade,
      f.numero_cpf,
      f.enderecoEMAIL,
      f.nomeEndereço,
      f.nome,
      f.numEndereco,
      f.nomeEXP,
      f.tipoProfissao,
      f.numeroRG,
      f.numTelefone,
      f.numTeleEmerg,
      f.tipo_pessoa,
      f.tipo_cliente,
      f.nomeUF,
      f.dataNascimento,
    ))

    //console.log('/cliente:'f.nome)
    this.router.navigate(['/clientes', cliente.id]);
    //this.router.navigate(['/cadastro', 'cadastro.id'])
    console.log('Cliente cadastrado com sucesso')
    console.log(cliente)
  }
  
}

