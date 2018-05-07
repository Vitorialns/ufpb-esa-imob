import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'; //book
import { ClienteService } from '../cliente.service';//bookservice

import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
//import { resolve } from 'path';

@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {
  public cliente: Cliente;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Service: ClienteService
  ) { }

  get clientes(): Cliente[] {
    return this.Service.getAll();
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.loadCliente(+params['id']))
      .subscribe((cliente: Cliente) => this.cliente = cliente)
  }
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
  }

  destroy(id) {
    if(confirm('Certeza?')) {
      this.Service.delete(+id);
    }
    this.router.navigate(['/clientes']);
    return false;
  }

}
