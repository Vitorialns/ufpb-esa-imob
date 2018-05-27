import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ImovelService } from '../../servico/imovel.service'
import { Imovel } from '../../model/imovel'
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../servico/cliente.service';
import { FilterdataPipe} from '../../filterdata.pipe'
@Component({
  selector: 'app-cad-imovel',
  templateUrl: './cad-imovel.component.html',
  styleUrls: ['./cad-imovel.component.css']
})
export class CadImovelComponent implements OnInit {
  tiposImovel = ["Casa", "Apartamento"]
  status = ["Disponível", "Ocupado"]
  nums = ["1", "2", "3"]
  nums1 = ["1", "2", "3", "4", "5"]
  
  private imovel:Imovel;
  private cliente: Cliente;
  private todosClientes: Cliente[];

  constructor(
    private router: Router,
    private imovelService: ImovelService,
    private clienteService: ClienteService 
  ){ }
    
  ngOnInit() {
    this.imovel=this.imovelService.getter();
    this.clienteService.getClientes().subscribe((todosClientes) => {
      this.todosClientes=todosClientes;
    }, (error) => {
      console.log(error);
    }) 
  }

  Submit(f: any) {
      //this.imovel.proprietario=f.proprietario,
      this.imovel.endereco=f.endereco,
      this.imovel.tipo_imovel=f.tipo_imovel,
      this.imovel.unidadestatus=f.unidadestatus,
      this.imovel.unidadequarto=f.unidadequarto,
      this.imovel.unidadegaragem=f.unidadegaragem,
      this.imovel.observacoes=f.observacoes
      
      this.imovelService.createImovel(this.imovel).subscribe((imovel) => {
      this.router.navigate(['imoveis']);
      
      }, (error) => {
        console.log(error);
      });
    
  }
  escolhaClienteLocador(cliente) {
    this.imovel.clientelocador=cliente
    console.log(cliente)
  }
}
