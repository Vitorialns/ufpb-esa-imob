import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../../servico/cliente.service'
import { Router } from '@angular/router';
import { FilterdataPipe } from '../../filterdata.pipe';
//import { CadClienteComponent } from '../cad-cliente/cad-cliente.component'



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
        this.todosClientes=todosClientes;
      },(error) => {
        console.log(error);
      })
    }

    show(cliente) {
      this.clienteService.setter(cliente);
      this.router.navigate(['/clientes/',cliente.id]);
    }

    destroy(cliente) {
      this.clienteService.deleteCliente(cliente.id).subscribe((data) => {
        this.todosClientes.splice(this.todosClientes.indexOf(cliente),1)
      }, (error) => {
        console.log(error);
      })
    }
    

}
