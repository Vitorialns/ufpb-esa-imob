export class Imovel {

  public id: number;
  constructor(
    
    public proprietario: string,
    public endereco: string,
    public tipo_imovel: string,
    public unidadestatus: string,
    public unidadequarto: string,
    public unidadegaragem: string,
    public observacoes: string,
  ) { }
}
