import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ImovelService } from '../imovel.service'
import { Imovel } from '../imovel'
@Component({
  selector: 'app-cad-imovel',
  templateUrl: './cad-imovel.component.html',
  styleUrls: ['./cad-imovel.component.css']
})
export class CadImovelComponent {
  tiposImovel = ["Casa", "Apartamento"]
  status = ["Disponível", "Ocupado"]
  nums = ["1", "2", "3"]
  nums1 = ["1", "2", "3", "4", "5"]
  

  constructor(private router: Router, private imovelService: ImovelService) { }


  onSubmit(f: any) {
    const imovel = this.imovelService.add(new Imovel(
      f.proprietario,
      f.endereco,
      f.tipo_imovel,
      f.unidadestatus,
      f.unidadequarto,
      f.unidadegaragem,
      f.observacoes
    ))
    console.log(imovel)
    this.router.navigate(['/imoveis', imovel.id]);
  }
}
