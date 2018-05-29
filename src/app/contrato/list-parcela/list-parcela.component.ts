import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Parcela } from '../../model/parcela'
import { ParcelaService } from '../../servico/parcela.service'

@Component({
  selector: 'app-list-parcela',
  templateUrl: './list-parcela.component.html',
  styleUrls: ['./list-parcela.component.css']
})
export class ListParcelaComponent implements OnInit {
  private parcelas: Parcela;
  @Input() autor : string;
  private todasparcelas: Parcela[];
  constructor(
    private parcelaservice: ParcelaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.parcelas=this.parcelaservice.getter();
    this.parcelaservice.getParcelas().subscribe((todasparcelas) => { 
      this.todasparcelas=todasparcelas;
    },(error) => {
      console.log(error);
    })
  }
  show(parcela) {
    this.parcelaservice.setter(parcela);
    this.router.navigate(['/parcelas/', parcela.id]);
  }

}
