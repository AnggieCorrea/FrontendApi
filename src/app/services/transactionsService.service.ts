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
  public getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBase);
  }
  public getTransactionsPageable(
    page: number,
    size: number,
    isConsistent: boolean,
    startDate: string,
    endDate: string
  ): Observable<Transaction[]> {
    return this.http.get<any>(
      this.urlBase +
        `?pageNumber=${page}&PageSize=${size}&IsConsistent=${isConsistent}&StartDate=${startDate}&EndDate=${endDate}`
    );
  }
}
