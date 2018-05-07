export class Cliente {
    public id: number;
 
    constructor(
     public bairro: string,
     public cep: string,
     public cidade: string,
     public cpfcnpj: string,
     public email: string,
     public endereco: string,
     public nome: string,
     public numero: string,
     public orgao: string,
     public profissao: string,
     public rg: string,
     public telefone1: string,
     public telefone2: string,
     public telefone3: string,
     public tipo1: string,
     public tipo2: string,
     public ufcliente: string,
     public ufrg: string,
     public datanascimento: string
    ) {}
  
 }