import { Component, OnInit } from '@angular/core';
import {Contrato} from '../../model/contrato'
import { ContratoService } from '../../servico/contrato.service';
import { Router } from '@angular/router';
import { Imovel } from '../../model/imovel'
import { ImovelService } from '../../servico/imovel.service';


@Component({
  selector: 'app-show-contrato',
  templateUrl: './show-contrato.component.html',
  styleUrls: ['./show-contrato.component.css']
})
export class ShowContratoComponent implements OnInit {
  private imovel: Imovel;
  private todosContrato: Contrato[];
  private todosImoveis: Imovel[];
  private contrato: Contrato;

  constructor(
    private router: Router,
    private contratoService: ContratoService,
    private imovelService:ImovelService
  ) { }

  ngOnInit() {
    this.imovel=this.imovelService.getter();
    this.contrato=this.contratoService.getter();
    this.contratoService.getContratos().subscribe((todosContrato) => {
      console.log(todosContrato);
      this.todosContrato=todosContrato;
    },(error) => {
      console.log(error);
    })

    this.imovelService.getImoveis().subscribe((todosImoveis) => {
      this.todosImoveis=todosImoveis;
    },(error) => {
      console.log(error);
    })


  }
  destroy(contrato, imovel) {
    this.imovel = contrato.idimovel;
    this.imovel.unidadestatus="Disponível";
    this.imovelService.updateImovel(this.imovel).subscribe((imovel) => {
      console.log("Imovel Atualizado")
    })
    this.contratoService.deleteContrato(contrato.id).subscribe((data) => {
    this.todosContrato.splice(this.todosContrato.indexOf(contrato),1)
    window.location.reload()
    this.router.navigate(['/contratos']);
    }, (error) => {
      console.log(error);
    })
    }
    
    edit(contrato) {
      this.contratoService.setter(contrato);
      this.router.navigate(['contratos/:id/edit']);
    }

}
