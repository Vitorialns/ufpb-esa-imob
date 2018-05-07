import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'; //book
import { ClienteService } from '../cliente.service';//bookservice
import { Router } from '@angular/router';
import { CadClienteComponent } from '../cad-cliente/cad-cliente.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
  searchClientes: Cliente[];
  clientes1: Cliente[];
  menssage: string;

  constructor(
    private router: Router,
    private service: ClienteService,
    ) { }

    
  
    get clientes(): Cliente[] {
      return this.service.getAll();
    }

    show(id) {
      this.router.navigate(['/clientes' , id]);
      return false;
    }

    edit(id) {
      this.router.navigate(['/clientes' ,id, 'edit']);
      return false;
    }

    destroy(id) {
      if(confirm('Certeza?')) {
        this.service.delete(+id);
      }
      return false;
    }


  ngOnInit() {
   
  }

}
