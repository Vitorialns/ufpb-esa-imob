import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ImovelService } from '../../servico/imovel.service'
import { Imovel } from '../imovel'
@Component({
  selector: 'app-cad-imovel',
  templateUrl: './cad-imovel.component.html',
  styleUrls: ['./cad-imovel.component.css']
})
export class CadImovelComponent implements OnInit {
  tiposImovel = ["Casa", "Apartamento"]
  status = ["Disponível", "Ocupado"]
  nums = ["1", "2", "3"]
  nums1 = ["1", "2", "3", "4", "5"]
  
  private imovel:Imovel;

  constructor(
    private router: Router,
    private imovelService: ImovelService) { }
    
  ngOnInit() {
    this.imovel=this.imovelService.getter();
  }

  onSubmit(f: any) {
    if(this.imovel.id==undefined){
      this.imovel.proprietario=f.proprietario,
      this.imovel.endereco=f.endereco,
      this.imovel.tipo_imovel=f.tipo_imovel,
      this.imovel.unidadestatus=f.unidadestatus,
      this.imovel.unidadequarto=f.unidadequarto,
      this.imovel.unidadegaragem=f.unidadegaragem,
      this.imovel.observacoes=f.observacoes

      this.imovelService.createImovel(this.imovel).subscribe((imovel) => {
        console.log(imovel);
        this.router.navigate(['imoveis']);
      }, (error) => {
        console.log(error);
      });
    }else{
      this.imovelService.updateImovel(this.imovel).subscribe((imovel) => {
        console.log(imovel);
        this.router.navigate(['imoveis']);
      }, (error) => {
        console.log(error);
      });
    }
  }
}
