import { Contrato } from "./contrato";

export class Parcela {
    id: Number;
    contrato: Contrato;
    locatario: String;
    endereco: String;
    apto: String;
    aluguel: Number;
    condominio: Number;
    vencimento: Number;
    total: Number;
    juros: Number;
    multa: Number;
    pagar: Number;
    datapag: Date;


}