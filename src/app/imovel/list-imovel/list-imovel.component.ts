import { Component, OnInit } from '@angular/core';
import { ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ImovelService } from '../../servico/imovel.service'
import { Imovel } from '../imovel'

@Component({
  selector: 'app-list-imovel',
  templateUrl: './list-imovel.component.html',
  styleUrls: ['./list-imovel.component.css']
})
export class ListImovelComponent implements OnInit {
  private todosImoveis:Imovel[];
  constructor(
    private router:Router,
    private imovelService: ImovelService
  ) { }

  ngOnInit() {
    this.imovelService.getImoveis().subscribe((todosImoveis) => {
      console.log(todosImoveis);
      this.todosImoveis=todosImoveis;
    },(error) => {
      console.log(error);
    })
  }

  show(imovel) {
    this.imovelService.setter(imovel);
    this.router.navigate(['/imoveis/', imovel.id]);
  }

  

}
