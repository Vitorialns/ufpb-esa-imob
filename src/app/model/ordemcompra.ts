import { Imovel } from "./imovel";
import { Contrato } from "./contrato";

export class OrdemCompra {
    id: number;
    contrato: Contrato;
    empresa: string;
    data: Date;
    detalhes: string; 
}