//import { ClienteLocador } from "./cliente_locador";
import { Cliente } from "./cliente";
import { Endereco } from "./endereco";

export class Imovel {

  id: number;
  
  clienteLocatario: Cliente;
  clientelocador: Cliente;
  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  //endereco: Endereco;
  tipo_imovel: string;
  unidadestatus: string;
  unidadequarto: string;
  unidadegaragem: string;
  observacoes: string;
  
}
