import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReqRes, Transaction } from '../models/transaction';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  urlBase = 'https://konciliastudioapi.azurewebsites.net/api/txs';

  constructor(private http: HttpClient) {}

  //Métodos
  public getTransactions() {
    return this.http.get<ReqRes>(this.urlBase).pipe(
      map((resp) => {
        console.log(resp);
        return resp.txs.map((transaccion) => new Transaction(transaccion));
      })
    );
  }
}
