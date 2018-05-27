import { Imovel } from "./imovel";

export class OrdemServico {
    id: Number;
    idimovel: Imovel;
    funcionario: string;
    data: Date;
    detalhes: string; 
}