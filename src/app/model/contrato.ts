import { Cliente } from "./cliente";
import { Imovel } from "./imovel";
import { Parcela } from "./parcela";

export class Contrato {
    id: Number;
    datafinal: Date;
    datainicial: Date;
    clientelocatario: Cliente;
    clientelocador: Cliente;
    fiador: Cliente;
    idimovel: Imovel;
    valoraluguel: Number;
    valorcondominio: Number;
    valortotal: Number;
    diadevencimento: Number;
    duracao: Number;
    parcelas: Parcela;
} 