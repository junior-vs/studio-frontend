import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../interfaces/imprimivel.js";
import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}
  
  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }

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

  toString(): string {
    return JSON.stringify(this);
  }
}
