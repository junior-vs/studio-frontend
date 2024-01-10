import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  valorItem!: string;
  editando = false;
  textoBtn = 'Salvar item';
  constructor(private service: ListaDeCompraService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  editarItem() {
    this.service.editarItemDaLista(
      this.itemQueVaiSerEditado,
      this.valorItem
    );
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar item';
  }

  ngOnInit(): void {}

  adicionarItem() {
    this.service.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }
  limparCampo() {
    this.valorItem = '';
  }
}
