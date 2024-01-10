import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string): Item {
    const id = this.listaDeCompra.length + 1;
    return {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false,
    };
  }

  adicionarItemNaLista(nomeDoItem: string) {
    this.listaDeCompra.push(this.criarItem(nomeDoItem));
    // this.atualizarLocalStorage();
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const id = itemAntigo.id;

    const itemEditado: Item = {
      id: id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado,
    };
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
    // this.atualizarLocalStorage();
  }
  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
