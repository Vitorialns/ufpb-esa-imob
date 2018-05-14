import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'; //book
import { ClienteService } from '../../servico/cliente.service'
import { Router } from '@angular/router';
import { CadClienteComponent } from '../cad-cliente/cad-cliente.component'



@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
  private todosClientes:Cliente[];
  constructor(
    private router: Router,
    private clienteService: ClienteService,
    ) { }
    ngOnInit() {
      this.clienteService.getClientes().subscribe((todosClientes) => {
        console.log(todosClientes);
        this.todosClientes=todosClientes;
      },(error) => {
        console.log(error);
      })
    }

    show(cliente) {
      this.clienteService.setter(cliente);
      this.router.navigate(['/user',cliente.id]);
    }

    destroy(cliente) {
      this.clienteService.deleteCliente(cliente.id).subscribe((data) => {
        this.todosClientes.splice(this.todosClientes.indexOf(cliente),1)
      }, (error) => {
        console.log(error);
      })
    }
    /*
    destroy(id) {
      if(confirm('Certeza?')) {
        this.service.delete(+id);
      }
      return false;
    }*/


  

}
