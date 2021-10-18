import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../models/transaction';
import { TransactionsService } from 'src/app/services/transactionsService.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css'],
})
export class ViewTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(
    private router: Router,
    private transactionService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService
      .getTransactions()
      .subscribe((res: Transaction[]) => {
        console.log(res);
        this.transactions = res;
      });
  }
}
