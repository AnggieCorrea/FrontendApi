import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  urlBase = 'https://konciliastudioapi.azurewebsites.net/api/txs';
  transactions: Transaction[] = [];

  constructor(private http: HttpClient) {}

  //Métodos
  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.urlBase);
  }
}
