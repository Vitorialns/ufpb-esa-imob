import { Component, OnInit } from '@angular/core';
import { OrdemCompra } from '../../model/ordemcompra';
import { Router } from '@angular/router';
import { OrdemCompraService } from '../../servico/ordemcompra.service';

@Component({
  selector: 'app-edit-ordemcompra',
  templateUrl: './edit-ordemcompra.component.html',
  styleUrls: ['./edit-ordemcompra.component.css']
})
export class EditOrdemcompraComponent implements OnInit {
  private todasOrdens:OrdemCompra[];
  private ordemcompra:OrdemCompra;
  constructor(
    private router: Router,
    private ordemcompraservice: OrdemCompraService
  ) { }

  ngOnInit() {
    this.ordemcompra=this.ordemcompraservice.getter();
  }
  onSubmit(f: any) {
    
    this.ordemcompraservice.updateImovel(this.ordemcompra).subscribe((ordemcompra) => {
      this.router.navigate(['ordensc']);
    }, (error) => {
      console.log(error);
    });
  }
  

}
