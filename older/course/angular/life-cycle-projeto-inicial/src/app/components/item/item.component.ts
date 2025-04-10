import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Console } from 'console';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges , OnDestroy{
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoItemParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}
  ngOnDestroy(): void {
    console.log('onDestroy')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges');
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem() {
    console.log('delendo item ...');
    this.emitindoItemParaDeletar.emit(this.item);
  }
}
