export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  static getInstance(
    dataInput: string,
    quantidadeInput: string,
    valorInput: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataInput.replace(exp, ","));
    const quantidade = parseInt(quantidadeInput);
    const valor = parseFloat(valorInput);
    return new this(date, quantidade, valor);
  }
}
