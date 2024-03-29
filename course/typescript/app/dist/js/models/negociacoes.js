export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    toString() {
        return JSON.stringify(this);
    }
    ehIgual(negociacoes) {
        return (JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista()));
    }
}
