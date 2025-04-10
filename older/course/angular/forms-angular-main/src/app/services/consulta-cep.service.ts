import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

import { ConsultaCepResp } from "./consulta-cep-resp";
import { ConsultaCepError } from "./consulta-cep-error";

@Injectable({
  providedIn: "root",
})
export class ConsultaCepService {
  url_API = "https://viacep.com.br/ws/";

  constructor(private http: HttpClient) {}

  consultaCEP(cep: string): Observable<ConsultaCepResp> {
    return this.http.get<ConsultaCepResp>(`${this.url_API}${cep}/json`)
    .pipe(
      catchError((err) => {
        console.log("error caught in service");
        console.error(err);
                //Handle the error here

        return throwError(err); //Rethrow it back to component
      })
    );
  }
}
