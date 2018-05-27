import { Component, OnInit, ValueProvider, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImovelService } from '../../servico/imovel.service'
import { Imovel } from '../../model/imovel'


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
    this.imovel=this.imovelService.getter();
    }


    onSubmit(f: any) {
      this.imovelService.updateImovel(this.imovel).subscribe((imovel) => {
        this.router.navigate(['imoveis']);
      }, (error) => {
        console.log(error);
      });
    } 
      
}
