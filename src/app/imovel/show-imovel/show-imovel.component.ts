import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImovelService } from '../imovel.service'
import { Imovel } from '../imovel'

@Component({
  selector: 'app-show-imovel',
  templateUrl: './show-imovel.component.html',
  styleUrls: ['./show-imovel.component.css']
})
export class ShowImovelComponent implements OnInit {
  public imovel: Imovel;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private imovelService: ImovelService
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.loadImovel(+params['id']))
    .subscribe((imovel: Imovel) => this.imovel = imovel)
    }
    get imoveis(): Imovel[] {
      return this.imovelService.getAll();
    }

    loadImovel(id: number): Promise<Imovel> {
      return new Promise((resolve) => resolve(this.imovelService.getById(id)));
    }

    back() {
      this.router.navigate(['/imoveis']);
      return false;
    }

    edit() {
      this.router.navigate(['/imoveis', this.imovel.id, 'edit']);
      return false;
    }
    
    destroy(id) {
      if(confirm('Certeza?')) {
        this.imovelService.delete(+id);
      }
      this.router.navigate(['/imoveis']);
      return false;
    }
  }
