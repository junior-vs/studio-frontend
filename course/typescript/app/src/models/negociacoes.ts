import { Imprimivel } from "../interfaces/imprimivel.js";
import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  toString(): string {
    return JSON.stringify(this);
  }
  ehIgual(negociacoes: Negociacoes): boolean {
    return (
      JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    );
  }
}
