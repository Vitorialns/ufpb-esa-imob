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
import { Parcela } from '../../model/parcela'
import { ParcelaService } from '../../servico/parcela.service'


@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  private contrato: Contrato;
  private cliente: Cliente;
  private imovel: Imovel;
  private parcelas: Parcela;
  
  
  private todasparcelas: Parcela[];
  private todosContrato: Contrato[];
  private todosCliente: Cliente[];
  private todosImoveis: Imovel[];

  constructor( 
    private router: Router,
    private parcelaservice: ParcelaService,
    private contratoService:ContratoService,
    private clienteService:ClienteService,
    private imovelService:ImovelService

  ) { }

  ngOnInit() {
    this.imovel=this.imovelService.getter();
    this.contrato=this.contratoService.getter();
    this.cliente=this.clienteService.getter();
    this.parcelas=this.parcelaservice.getter();
    
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
    this.parcelaservice.getParcelas().subscribe((todasparcelas) => { 
      this.todasparcelas=todasparcelas;
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
      var datafinal = new Date(f.datafinal);
      this.contrato.datainicial=f.datainicial;//
      var datainicial = new Date(f.datainicial);
      var inicio = datainicial.getMonth() + 1
      var datap = datainicial.setDate(parseInt(f.diadevencimento))
      var fim = datafinal.getMonth() + 1
      this.contrato.valoraluguel=f.valoraluguel;//
      this.contrato.valorcondominio=f.valorcondominio;//
      this.contrato.valortotal=f.valoraluguel+f.valorcondominio;//
      this.contrato.duracao = fim - inicio ;
      

      this.contratoService.createContrato(this.contrato).subscribe((contrato) => {
        console.log(contrato);
        this.parcelas.contrato = contrato;
        this.router.navigate(['contratos']);
      }, (error) => {
        console.log(error);
      });
      for (var i = 1; i<=this.contrato.duracao; i++ ) {

        var data = new Date(f.datainicial);
        
        var mes = data.getMonth();
        var dia = data.getDate()+1;
        data.setMonth(mes+i);
        data.setDate(dia)
        console.log(data)

        

        this.parcelas.aluguel = this.contrato.valoraluguel;
        this.parcelas.condominio = this.contrato.valorcondominio;
        this.parcelas.apto = this.contrato.idimovel.numero;
        this.parcelas.endereco = this.contrato.idimovel.rua;
        this.parcelas.locatario = this.contrato.clientelocatario.nome;
        this.parcelas.vencimento = data;
        this.parcelas.total = this.contrato.valortotal;
        this.parcelas.juros = (this.parcelas.total*(0.33/100))
        this.parcelas.pagar = (this.parcelas.total + this.parcelas.juros + this.parcelas.multa)
        this.parcelas.status = "A pagar";
        
    

        this.parcelaservice.createParcela(this.parcelas).subscribe((parcelas) => {
          
        })
        
      }
  }

  

}
