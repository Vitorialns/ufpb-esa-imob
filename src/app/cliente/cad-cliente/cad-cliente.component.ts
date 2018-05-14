///<reference path="../cliente.ts"/>
import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../../servico/cliente.service'

//import { ClienteService } from '../cliente.service';



@Component({
  selector: 'app-cad-cliente',
  templateUrl: './tela-cadastro.html',
  styleUrls: ['./cad-cliente.component.css']
})
export class CadClienteComponent implements OnInit {
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

  onSubmit() {
    if(this.cliente.id==undefined){
      this.clienteService.createCliente(this.cliente).subscribe((cliente) => {
        console.log(cliente);
        this.router.navigate(['clientes']);
      }, (error) => {
        console.log(error);
      });
    }else{
      this.clienteService.updateCliente(this.cliente).subscribe((cliente) => {
        console.log(cliente);
        this.router.navigate(['clientes']);
      }, (error) => {
        console.log(error);
      });
    } 
  }
  
}

