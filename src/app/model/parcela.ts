import { Contrato } from "./contrato";

export class Parcela {
    id: number;
    contrato: Contrato;
    locatario: String;
    endereco: String;
    apto: String;
    aluguel: number;
    condominio: number;
    vencimento: Date;
    total: number;
    juros: number;
    multa: number;
    pagar: number;
    datapag: Date;
    status: string;
}