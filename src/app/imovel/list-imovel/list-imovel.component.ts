import { Component, OnInit } from '@angular/core';
import { ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ImovelService } from '../imovel.service'
import { Imovel } from '../imovel'

@Component({
  selector: 'app-list-imovel',
  templateUrl: './list-imovel.component.html',
  styleUrls: ['./list-imovel.component.css']
})
export class ListImovelComponent implements OnInit {

  constructor(
    private router:Router,
    private service: ImovelService
  ) { }

  get imoveis(): Imovel[] {
    return this.service.getAll();
  }

  show(id) {
    this.router.navigate(['/imoveis', id]);
    return false;
  }

  edit(id) {
    this.router.navigate(['/imoveis', id, 'edit']);
    return false;
  }

  destroy(id) {
    if(confirm('Certeza?')) {
      this.service.delete(+id);
    }
    return false;
  }

  ngOnInit() {
  }

}
