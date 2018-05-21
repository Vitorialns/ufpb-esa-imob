import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Imovel } from '../../imovel/imovel';
import { Cliente } from '../../cliente/cliente';
import { ContratoService } from '../../servico/contrato.service';
import { Contrato } from '../contrato';
import { ClienteService } from '../../servico/cliente.service';
import { ImovelService } from '../../servico/imovel.service';
import { FilterdataPipe } from '../../filterdata.pipe';


@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  private contrato: Contrato;
  private cliente: Cliente;
  private imovel: Imovel;
  private todosContrato: Contrato[];
  private todosCliente: Contrato[];
  private todosImoveis: Contrato[];

  constructor( 
    private router: Router,
    private contratoService:ContratoService,
    private clienteService:ClienteService,
    private imovelService:ImovelService

  ) { }

  ngOnInit() {
    this.imovel=this.imovelService.getter();
    this.contrato=this.contratoService.getter();
    this.cliente=this.clienteService.getter();
    this.contratoService.getContratos().subscribe((todosContrato) => {
      this.todosContrato=todosContrato;
    },(error) => {
      console.log(error);
    }
  )

    this.clienteService.getClientes().subscribe((todosCliente) => {
      this.todosCliente=todosCliente;
    },(error) => {
      console.log(error);
    })

    this.imovelService.getImoveis().subscribe((todosImoveis) => {
      this.todosImoveis=todosImoveis;
    },(error) => {
      console.log(error);
    })
    
  }
  escolhaClienteLocador(cliente) {
    this.contrato.idcliente_locador=cliente.nome
  }

  escolhaClienteLocatario(cliente) {
    this.contrato.idcliente_locatario=cliente.nome
  }
  onSubmit(f: any) { 
    if(this.cliente.id==undefined){      
      this.contrato.datadevencimento=f.datadevencimento;//
      this.contrato.datafinal=f.datafinal;//
      this.contrato.datainicial=f.datainicial;//
      this.contrato.valoraluguel=f.valoraluguel;//
      this.contrato.valorcondominio=f.valorcondominio;//
      this.contrato.valortotal=f.valoraluguel+f.valorcondominio;//

      

      this.contratoService.createContrato(this.contrato).subscribe((contrato) => {
        console.log(contrato);
        this.router.navigate(['contratos']);
      }, (error) => {
        console.log(error);
      });
      console.log("cntratos a baixo")
      console.log(this.contrato);
    }else{
      this.contratoService.updateContrato(this.contrato).subscribe((contrato) => {
        console.log(contrato);
        this.router.navigate(['contratos']);
      }, (error) => {
        console.log(error);
      });
    } 
  }

  

}
