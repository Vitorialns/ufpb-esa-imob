import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Imovel } from '../../model/imovel'
import { Cliente } from '../../model/cliente'; 
import { ContratoService } from '../../servico/contrato.service';
import { Contrato } from '../../model/contrato';
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
  private todosCliente: Cliente[];
  private todosImoveis: Imovel[];

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
    escolhaClienteLocatario(cliente, imovel) {
    this.contrato.clientelocatario=cliente
    this.contrato.clientelocador=imovel.clientelocador
    this.imovel.clienteLocatario=cliente
    this.imovel.unidadestatus="Ocupado"
    this.contrato.idimovel=imovel
    this.imovelService.updateImovel(this.imovel).subscribe((imovel) => {
      console.log("Imovel Atualizado")
    })
    
  }
  escolhaClienteFiador(fiador) {
      this.contrato.fiador=fiador;
  }
  onSubmit(f: any) {      
      this.contrato.diadevencimento=f.datadevencimento;//
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
  }

  

}
