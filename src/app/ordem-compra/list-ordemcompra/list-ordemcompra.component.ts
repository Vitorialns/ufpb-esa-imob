import { Component, OnInit } from '@angular/core';
//import { OrdemCompra } from '../../model/imovel.1'
import { OrdemCompraService } from '../../servico/ordemcompra.service'
import { Router } from '@angular/router';
import { OrdemCompra } from '../../model/ordemcompra';

@Component({
  selector: 'app-list-ordemcompra',
  templateUrl: './list-ordemcompra.component.html',
  styleUrls: ['./list-ordemcompra.component.css']
})
export class ListOrdemcompraComponent implements OnInit {
  private todasOrdens:OrdemCompra[];
  constructor(
    private router: Router,
    private ordemcompraservice: OrdemCompraService
  ) { }

  ngOnInit() {
    this.ordemcompraservice.getOrdens().subscribe((todasOrdens) => {
      this.todasOrdens=todasOrdens;
    }, (error) => {
      console.log(error);
    });
  }
  show(ordem) {
    this.ordemcompraservice.setter(ordem);
    this.router.navigate(['/ordemc/', ordem.id]);
  }
}
