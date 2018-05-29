import { Imovel } from "./imovel";
import { Contrato } from "./contrato";

export class OrdemServico {
    id: number;
    contrato: Contrato;
    funcionario: string;
    data: Date;
    detalhes: string; 
}