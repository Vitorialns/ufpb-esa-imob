import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'; 
import { ClienteService } from '../../servico/cliente.service'
import { Router } from '@angular/router';

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
    private clienteService: ClienteService
  ) { }
  ngOnInit() {
    this.cliente=this.clienteService.getter();
    this.clienteService.getClientes().subscribe((todosClientes) => {
      console.log(todosClientes);
      this.todosClientes=todosClientes;
    },(error) => {
      console.log(error);
    })
  
  }

  back() {
    this.router.navigate(['/clientes']);
    return false;
  }
  destroy(cliente) {
      this.clienteService.deleteCliente(cliente.id).subscribe((data) => {
        this.todosClientes.splice(this.todosClientes.indexOf(cliente),1)
        this.router.navigate(['/clientes']);
      }, (error) => {
        console.log(error);
      })
    }
    edit(cliente){
      this.clienteService.setter(cliente);
      this.router.navigate(['clientes/:id/edit']);
    }
    newuser(){
      let cliente = new Cliente();
      this.clienteService.setter(cliente);
      this.router.navigate(['clientes/new']);
    } 

}
