import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'; 
import { ClienteService } from '../../servico/cliente.service'

import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
//import { resolve } from 'path';

@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {
  private todosClientes:Cliente[];
  private cliente:Cliente;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }
  ngOnInit() {
    this.cliente=this.clienteService.getter();
  }
/*
  get clientes(): Cliente[] {
    return this.Service.getAll();
  }*/

  /*
  loadCliente(id: number): Promise<Cliente> {
    return new Promise((resolve) => resolve(this.Service.getById(id)));
  }

  back() {
    this.router.navigate(['/clientes']);
    return false;
  }

  edit() {
    this.router.navigate(['/clientes', this.cliente.id, 'edit']);
    return false;
  }*/

  destroy(cliente) {
      this.clienteService.deleteCliente(cliente.id).subscribe((data) => {
        this.todosClientes.splice(this.todosClientes.indexOf(cliente),1)
      }, (error) => {
        console.log(error);
      })
    }

}
