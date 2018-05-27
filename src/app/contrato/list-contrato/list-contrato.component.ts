import { Component, OnInit } from '@angular/core';
import {Contrato} from '../../model/contrato'
import { ContratoService } from '../../servico/contrato.service';
import { Router } from '@angular/router';
import { FilterdataPipe } from '../../filterdata.pipe';

@Component({
  selector: 'app-list-contrato',
  templateUrl: './list-contrato.component.html',
  styleUrls: ['./list-contrato.component.css']
})
export class ListContratoComponent implements OnInit {
  private todosContratos: Contrato[]; 
  //private contrato: Contrato;
  
  constructor(
    private router: Router,
    private contratoService:ContratoService,
  ) { }
  show(contrato) {
    this.contratoService.setter(contrato);
    this.router.navigate(['/contratos/', contrato.id]);
  }
 
  ngOnInit() {
    this.contratoService.getContratos().subscribe((todosContratos) => {
      this.todosContratos=todosContratos;
      console.log(todosContratos);
    },(error) => {
      console.log(error);
      
    })
    /*this.contratoService.setter(cliente);
    this.imovelService.setter(imovel)
    this.router.navigate(['/contratos/', cliente.id,'/',imovel.id]); */
    
    
  }
  
  /*
  destroy(contrato) {
    this.contratoService.deleteContrato(contrato.id).subscribe((data) => {
      this.todosContratos.splice(this.todosContratos.indexOf(contrato),1)
    }, (error) => {
      console.log(error);
    });
  };*/

}
