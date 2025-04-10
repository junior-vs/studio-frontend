import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>;
  itemParaSerEditado!: Item;

  constructor(private listaService: ListaDeCompraService) {}
  ngDoCheck(): void {
    console.log('DoCheck');
    this.listaService.atualizarLocalStorage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.listaDeCompra = this.listaService.getListaDeCompra();
    console.log(this.listaDeCompra);
  }
  editar(item: Item) {
    console.log(item);
    this.itemParaSerEditado = item;
  }
  deletar(id: number) {
    const index = this.listaDeCompra.findIndex((item) => item.id === id);
    this.listaDeCompra.splice(index);
  }
  ngOnDestroy(): void {
    console.log('onDestroy');
  }
  limparLista() {
    this.listaDeCompra = [];
  }
}
