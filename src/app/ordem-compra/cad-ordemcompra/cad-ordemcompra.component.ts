import { Component, OnInit } from '@angular/core';
import { OrdemCompra } from '../../model/ordemcompra'
import { OrdemCompraService } from '../../servico/ordemcompra.service'
import { ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Imovel } from '../../model/imovel';
import { ImovelService } from '../../servico/imovel.service';
import { Contrato } from '../../model/contrato';
import { ContratoService } from '../../servico/contrato.service';

@Component({
  selector: 'app-cad-ordemcompra',
  templateUrl: './cad-ordemcompra.component.html',
  styleUrls: ['./cad-ordemcompra.component.css']
})
export class CadOrdemcompraComponent implements OnInit {
  f: any;
  private ordemcompra: OrdemCompra;
  private contrato: Contrato;

  private todasordens: OrdemCompra[];
  private todosContratos: Contrato[];

  constructor(
    private router: Router,
    private ordemcompraservice: OrdemCompraService,
    private contratoService:ContratoService

  ) { }

  ngOnInit() {
    this.ordemcompra=this.ordemcompraservice.getter();
    this.contratoService.getContratos().subscribe((todosContratos) => {
      this.todosContratos=todosContratos;
    },(error) => {
      console.log(error);
    })
  }

  

  onSubmit(f: any) {
      this.ordemcompra.empresa=f.empresa;
      this.ordemcompra.detalhes=f.detalhes;
      this.ordemcompra.data=f.data;
      this.ordemcompraservice.createOrdem(this.ordemcompra).subscribe((ordemcompra) => {
        console.log(ordemcompra);
        this.router.navigate(['ordensc']);
      }, (error) => {
        console.log(error);
      });
    }
    escolhaimovel(contrato) {
      this.ordemcompra.contrato=contrato
      console.log(contrato)
    } 
  }


