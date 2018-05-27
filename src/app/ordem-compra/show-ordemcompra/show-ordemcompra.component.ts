import { Component, OnInit } from '@angular/core';
import { OrdemCompra } from '../../model/ordemcompra';
import { OrdemCompraService } from '../../servico/ordemcompra.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-ordemcompra',
  templateUrl: './show-ordemcompra.component.html',
  styleUrls: ['./show-ordemcompra.component.css']
})
export class ShowOrdemcompraComponent implements OnInit {
  private ordemcompra: OrdemCompra;
  private todasordenscompra: OrdemCompra[];
  
  constructor(
    private router: Router,
    private ordemcompraservice: OrdemCompraService
  ) { }

  ngOnInit() {
    this.ordemcompra=this.ordemcompraservice.getter();
    this.ordemcompraservice.getOrdens().subscribe((todasordenscompra) => {
      this.todasordenscompra=todasordenscompra;
    }, (error) => {
      console.log(error);
    });
  }
  destroy(ordemcompra) {
    this.ordemcompraservice.deleteOrdem(ordemcompra.id).subscribe((data) => {
    this.todasordenscompra.splice(this.todasordenscompra.indexOf(ordemcompra),1)
    this.router.navigate(['/ordensc']);
    }, (error) => {
      console.log(error);
    })
    }
}
