import { Component, OnInit } from '@angular/core';
import { OrdemServicoService } from '../../servico/ordemservico.service'
import { Router } from '@angular/router';
import { OrdemServico } from '../../model/ordemservico';

@Component({
  selector: 'app-list-ordemservico',
  templateUrl: './list-ordemservico.component.html',
  styleUrls: ['./list-ordemservico.component.css']
})
export class ListOrdemservicoComponent implements OnInit {

  private todasOrdens: OrdemServico[];
  constructor(
    private router: Router,
    private ordemservicoservice: OrdemServicoService
  ) { }

  ngOnInit() {
    this.ordemservicoservice.getOrdens().subscribe((todasOrdens) => {
      this.todasOrdens=todasOrdens;
    }, (error) => {
      console.log(error);
    });
  }
  show(ordem) {
    this.ordemservicoservice.setter(ordem);
    this.router.navigate(['/ordems/', ordem.id]);
  }
}
