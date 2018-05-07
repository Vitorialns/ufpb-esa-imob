import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cliente } from '../cliente'; //book
import { ClienteService } from '../cliente.service';//bookservice

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
  tiposPessoa = ["Pessoa Fisica", "Pessoa Juridica"]
  tiposCliente = ["Locador", "Locatário"]
  public cliente: Cliente;

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.loadCliente(+params['id']))
      .subscribe((cliente: Cliente) => this.cliente = cliente)
  }

  loadCliente(id: number): Promise<Cliente> {
    return new Promise((resolve) => resolve(this.clienteService.getById(id)));

}

  onSubmit(f: any) {
      this.cliente.nome = f.nome;
      this.cliente.tipo1 = f.tipo_pessoa;
      this.cliente.tipo2 =  f.tipo_cliente
      this.cliente.cpfcnpj = f.numero_cpf;
      this.cliente.ufrg = f.ufrg;
      this.cliente.profissao = f.tipoProfissao;
      this.cliente.rg = f.numeroRG;
      this.cliente.orgao = f.nomeEXP;
      this.cliente.endereco = f.nomeEndereço;
      this.cliente.bairro = f.nomeBairro;
      this.cliente.numero = f.numEndereco;
      this.cliente.cidade = f.nomeCidade;
      this.cliente.ufcliente = f.nomeUF;
      this.cliente.cep = f.numeroCEP;
      this.cliente.email = f.enderecoEMAIL;
      this.cliente.telefone1 = f.numTelefone
      this.cliente.telefone2 = f.numTeleEmerg;

      this.clienteService.updade(this.cliente);
      this.router.navigate(['/clientes', this.cliente.id]);
  }

  show() {
    this.router.navigate(['/clientes', this.cliente.id]);
    return false;
  }

  back() {
    this.router.navigate(['/clientes']);
    return false;
  }

}
