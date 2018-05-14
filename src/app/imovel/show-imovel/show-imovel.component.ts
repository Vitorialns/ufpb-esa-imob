import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImovelService } from '../../servico/imovel.service'
import { Imovel } from '../imovel'

@Component({
  selector: 'app-show-imovel',
  templateUrl: './show-imovel.component.html',
  styleUrls: ['./show-imovel.component.css']
})
export class ShowImovelComponent implements OnInit {
  private imovel: Imovel;
  private todosImoveis:Imovel[];

  constructor(
    private router: Router,
    private imovelService: ImovelService
  ) { }

  ngOnInit() {
    this.imovel=this.imovelService.getter();
    this.imovelService.getImoveis().subscribe((todosImoveis) => {
      console.log(todosImoveis);
      this.todosImoveis=todosImoveis;
    },(error) => {
      console.log(error);
    })
    }


    back() {
      this.router.navigate(['/imoveis']);
      return false;
    }

    edit(imovel) {
      this.imovelService.setter(imovel);
      this.router.navigate(['imoveis/:id/edit']);
    }
    newuser(){
      let imovel = new Imovel();
      this.imovelService.setter(imovel);
      this.router.navigate(['imoveis/new']);
    } 
    
    destroy(imovel) {
      this.imovelService.deleteImovel(imovel.id).subscribe((data) => {
      this.todosImoveis.splice(this.todosImoveis.indexOf(imovel),1)
      this.router.navigate(['/imoveis']);
      }, (error) => {
        console.log(error);
      })
      }
  }
