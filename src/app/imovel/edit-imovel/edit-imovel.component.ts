import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImovelService } from '../imovel.service'
import { Imovel } from '../imovel'


@Component({
  selector: 'app-edit-imovel',
  templateUrl: './edit-imovel.component.html',
  styleUrls: ['./edit-imovel.component.css']
})
export class EditImovelComponent implements OnInit {

  public imovel: Imovel;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private imovelService: ImovelService
  ) { }
  tiposImovel = ["Casa", "Apartamento"]
  status = ["Disponível", "Ocupado"]
  nums = ["1", "2", "3"]
  nums1 = ["1", "2", "3", "4", "5"]

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.loadImovel(+params['id']))
    .subscribe((imovel: Imovel) => this.imovel = imovel)     
    }

    loadImovel(id: number): Promise<Imovel> {
      return new Promise((resolve) => resolve(this.imovelService.getById(id)));
    }

    onSubmit(f: any) {
      this.imovel.proprietario = f.proprietario,
      this.imovel.endereco = f.endereco,
      this.imovel.tipo_imovel = f.tipo_imovel,
      this.imovel.unidadestatus = f.unidadestatus,
      this.imovel.unidadequarto = f.unidadequarto,
      this.imovel.unidadegaragem = f.unidadegaragem,
      this.imovel.observacoes = f.observacoes

      this.router.navigate(['/imoveis', this.imovel.id]);
      
    }
      
}
