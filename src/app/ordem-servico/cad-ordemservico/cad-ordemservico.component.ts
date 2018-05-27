import { Component, OnInit } from '@angular/core';
import { OrdemServicoService } from '../../servico/ordemservico.service'
import { OrdemServico } from '../../model/ordemservico';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Imovel } from '../../model/imovel';
import { ImovelService } from '../../servico/imovel.service';
import { Contrato } from '../../model/contrato';
import { ContratoService } from '../../servico/contrato.service';

@Component({
  selector: 'app-cad-ordemservico',
  templateUrl: './cad-ordemservico.component.html',
  styleUrls: ['./cad-ordemservico.component.css']
})
export class CadOrdemservicoComponent implements OnInit {
  private ordemservico: OrdemServico;
  private contrato: Contrato;

  private todasordens: OrdemServico[];
  private todosContratos: Contrato[];
  constructor(
    private router: Router,
    private ordemservicoservice: OrdemServicoService,
    private contratoService:ContratoService
  ) { }

  ngOnInit() {
    this.ordemservico=this.ordemservicoservice.getter();
    this.contratoService.getContratos().subscribe((todosContratos) => {
      this.todosContratos=todosContratos;
    },(error) => {
      console.log(error);
    })
  }
  onSubmit(f: any) {
      this.ordemservico.funcionario=f.funcionario;
      this.ordemservico.detalhes=f.detalhes;
      this.ordemservico.data=f.data;
      this.ordemservicoservice.createOrdem(this.ordemservico).subscribe((ordemservico) => {
        console.log(ordemservico);
        this.router.navigate(['ordensc']);
      }, (error) => {
        console.log(error);
      });
    }
    escolhaimovel(contrato) {
      this.ordemservico.contrato=contrato
      console.log(contrato)
    }
}
 