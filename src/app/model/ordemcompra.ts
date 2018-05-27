import { Imovel } from "./imovel";
import { Contrato } from "./contrato";

export class OrdemCompra {
    id: Number;
    contrato: Contrato;
    empresa: string;
    data: Date;
    detalhes: string; 
}