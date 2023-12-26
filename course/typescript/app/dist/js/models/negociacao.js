export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ehIgual(negociacao) {
        return (this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static getInstance(dataInput, quantidadeInput, valorInput) {
        const exp = /-/g;
        const date = new Date(dataInput.replace(exp, ","));
        const quantidade = parseInt(quantidadeInput);
        const valor = parseFloat(valorInput);
        return new this(date, quantidade, valor);
    }
    toString() {
        return JSON.stringify(this);
    }
}
