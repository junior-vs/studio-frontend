import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item } from "../models/Item";
import { LivrosResultado } from "../models/LivrosResultado";

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private readonly API: string = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  buscar_old(valorDigitado: string): Observable<Item[]> {
    const params = new HttpParams().append('q', valorDigitado);
    return this.http.get<LivrosResultado>(this.API, { params }).pipe(
      //  tap((retorno) => console.log('tap: ', retorno)),
      map((resultado) => resultado.items ?? [])
      //  tap((resultado) => console.log('tap: ', resultado))
    );
  }

  buscar(valorDigitado: string): Observable<LivrosResultado> {
    const params = new HttpParams().append('q', valorDigitado);
    return this.http.get<LivrosResultado>(this.API, { params });
    //.pipe
    //  tap((retorno) => console.log('tap: ', retorno)),
    // map((resultado) => resultado.items ?? [])
    //  tap((resultado) => console.log('tap: ', resultado))      ();
  }
}
