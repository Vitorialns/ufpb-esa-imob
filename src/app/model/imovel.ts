//import { ClienteLocador } from "./cliente_locador";
import { Cliente } from "./cliente";

export class Imovel {

  id: Number;
  
  clienteLocatario: Cliente;
  clientelocador: Cliente;
  endereco: string;
  tipo_imovel: string;
  unidadestatus: string;
  unidadequarto: string;
  unidadegaragem: string;
  observacoes: string;
  
}
