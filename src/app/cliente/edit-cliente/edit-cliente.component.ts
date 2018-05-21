import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../../servico/cliente.service'

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
  tiposPessoa = [" ","Pessoa Fisica", "Pessoa Juridica"]
  tiposCliente = [" ","Locador", "Locatário"]
  private cliente:Cliente;

  constructor(
    private router: Router,

    private clienteService:ClienteService
  ) { }
  ngOnInit() {
    this.cliente=this.clienteService.getter();
  }
  onSubmit(f: any) {
    
    this.clienteService.updateCliente(this.cliente).subscribe((cliente) => {
      console.log(cliente);
      this.router.navigate(['clientes']);
    }, (error) => {
      console.log(error);
    });
  } 
}

  


