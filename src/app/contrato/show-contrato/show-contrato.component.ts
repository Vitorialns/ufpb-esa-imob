import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contrato';
import { ContratoService } from '../../servico/contrato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-contrato',
  templateUrl: './show-contrato.component.html',
  styleUrls: ['./show-contrato.component.css']
})
export class ShowContratoComponent implements OnInit {
  private todosContrato: Contrato[];
  private contrato: Contrato;

  constructor(
    private router: Router,
    private contratoService: ContratoService
  ) { }

  ngOnInit() {
    this.contrato=this.contratoService.getter();
    this.contratoService.getContratos().subscribe((todosContrato) => {
      console.log(todosContrato);
      this.todosContrato=todosContrato;
    },(error) => {
      console.log(error);
    })
  }
  destroy(contrato) {
    this.contratoService.deleteContrato(contrato.id).subscribe((data) => {
    this.todosContrato.splice(this.todosContrato.indexOf(contrato),1)
    this.router.navigate(['/contratos']);
    }, (error) => {
      console.log(error);
    })
    }
    edit(contrato) {
      this.contratoService.setter(contrato);
      this.router.navigate(['contratos/:id/edit']);
    }

}
