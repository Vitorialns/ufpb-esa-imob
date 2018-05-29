import { Component, OnInit } from '@angular/core';
import { Parcela } from '../../model/parcela';
import { ParcelaService } from '../../servico/parcela.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-parcela',
  templateUrl: './show-parcela.component.html',
  styleUrls: ['./show-parcela.component.css']
})
export class ShowParcelaComponent implements OnInit {
  private parcela: Parcela;
  constructor(
    private router: Router,
    private parcelaservice: ParcelaService
  ) { }

  ngOnInit() {
    this.parcela=this.parcelaservice.getter();
  }
  baixa(parcela) {
    var data = new Date();
    var mes = data.getMonth()+1;
    parcela.status = "Paga no dia "+ data.getDate()+" do "+mes;

    this.parcelaservice.updateParcela(this.parcela).subscribe((parcela) => {
      console.log(parcela);
      this.router.navigate(['parcelas']);
    }, (error) => {
      console.log(error);
    });
  }
}
