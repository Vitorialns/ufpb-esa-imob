import { Component, OnInit } from '@angular/core';
import { OrdemServicoService } from '../../servico/ordemservico.service'
import { Router } from '@angular/router';
import { OrdemServico } from '../../model/ordemservico';

@Component({
  selector: 'app-show-ordemservico',
  templateUrl: './show-ordemservico.component.html',
  styleUrls: ['./show-ordemservico.component.css']
})
export class ShowOrdemservicoComponent implements OnInit {
  private todasOrdens: OrdemServico[];
  private ordemservico: OrdemServico;
  constructor(
    private router: Router,
    private ordemservicoservice: OrdemServicoService
  ) { }

  ngOnInit() {
    this.ordemservico=this.ordemservicoservice.getter();
    this.ordemservicoservice.getOrdens().subscribe((todasOrdens) => {
      this.todasOrdens=todasOrdens;
    }, (error) => {
      console.log(error);
    });
  }
  destroy(ordemservico) {
    this.ordemservicoservice.deleteOrdem(ordemservico.id).subscribe((data) => {
    this.todasOrdens.splice(this.todasOrdens.indexOf(ordemservico),1)
    this.router.navigate(['/ordensc']);
    }, (error) => {
      console.log(error);
    })
    }

}
