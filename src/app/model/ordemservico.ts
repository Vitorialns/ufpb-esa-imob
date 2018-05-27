import { Imovel } from "./imovel";
import { Contrato } from "./contrato";

export class OrdemServico {
    id: Number;
    contrato: Contrato;
    funcionario: string;
    data: Date;
    detalhes: string; 
}