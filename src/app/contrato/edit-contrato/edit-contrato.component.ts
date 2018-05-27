import { Component, OnInit } from '@angular/core';
import {Contrato} from '../../model/contrato'
import { ContratoService } from '../../servico/contrato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contrato',
  templateUrl: './edit-contrato.component.html',
  styleUrls: ['./edit-contrato.component.css']
})
export class EditContratoComponent implements OnInit {
  private todosContratos: Contrato[];
  private contrato: Contrato;
  constructor(
    private router: Router,
    private contratoService:ContratoService,
  ) { }

  ngOnInit() {
    this.contrato=this.contratoService.getter();
  }

  onSubmit(f: any) {
    
    this.contratoService.updateContrato(this.contrato).subscribe((contrato) => {
      console.log(contrato);
      this.router.navigate(['contratos']);
    }, (error) => {
      console.log(error);
    });
  } 

}
