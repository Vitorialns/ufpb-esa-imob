import { Component, OnInit } from '@angular/core';
import { OrdemCompra } from '../../model/ordemcompra'
import { OrdemCompraService } from '../../servico/ordemcompra.service'
import { ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Imovel } from '../../model/imovel';
import { ImovelService } from '../../servico/imovel.service';

@Component({
  selector: 'app-cad-ordemcompra',
  templateUrl: './cad-ordemcompra.component.html',
  styleUrls: ['./cad-ordemcompra.component.css']
})
export class CadOrdemcompraComponent implements OnInit {
  f: any;
  private ordemcompra: OrdemCompra;
  private imovel: Imovel;

  private todasordens: OrdemCompra[];
  private todosImoveis: Imovel[];

  constructor(
    private router: Router,
    private ordemcompraservice: OrdemCompraService,
    private imovelService:ImovelService

  ) { }

  ngOnInit() {
    this.ordemcompra=this.ordemcompraservice.getter();
    this.imovelService.getImoveis().subscribe((todosImoveis) => {
      this.todosImoveis=todosImoveis;
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
    escolhaimovel(imovel) {
      this.ordemcompra.idimovel=imovel
      console.log(imovel)
    } 
  }


