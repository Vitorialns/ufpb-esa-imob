import { Cliente } from "./cliente";
import { Imovel } from "./imovel";
import { Parcela } from "./parcela";

export class Contrato {
    id: number;
    datafinal: Date;
    datainicial: Date;
    clientelocatario: Cliente;
    clientelocador: Cliente;
    fiador: Cliente;
    idimovel: Imovel;
    valoraluguel: number;
    valorcondominio: number;
    valortotal: number;
    diadevencimento: Number;
    duracao: number;
} 