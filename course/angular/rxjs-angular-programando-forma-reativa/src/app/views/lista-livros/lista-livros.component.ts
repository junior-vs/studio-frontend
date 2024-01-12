import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Subscription,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Livro } from 'src/app/models/interface';
import { Item } from "src/app/models/Item";
import { LivrosResultado } from "src/app/models/LivrosResultado";
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const PAUSA = 300;
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  campoBusca = new FormControl();
  subscription: Subscription;
  livro: Livro;
  mensagemErro = '';
  livrosResultado: LivrosResultado;
  listaLivros: LivroVolumeInfo[];

  constructor(private service: LivroService) {}
  totalDeLivros$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    tap(() => console.log('Fluxo inicial')),
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
    map((resultado) => (this.livrosResultado = resultado)),
    catchError((erro) => {
      console.log(erro);
      return of();
    })
  );

  livrosEncontrado$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    tap(() => console.log('Fluxo inicial ')),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
    // tap((retornoApi) => console.log('requisição realizada... ', retornoApi)),
    map((resultado) => (this.livrosResultado = resultado)),
    map((resultado) => resultado.items ?? []),
    // map((items) => this.livrosResultadoParaLivros(items)),
    map((items) => (this.listaLivros = this.livrosResultadoParaLivros(items))),

    catchError((error) => {
      console.log(error);
      return throwError(() => new Error((this.mensagemErro = 'Erro!')));
    })
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }
}
