import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/services/transactionsService.service';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../models/transaction';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css'],
})
export class ViewTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  search: string = '';

  page_size: number = 5;
  page_number: number = 1;
  from: number = 0;
  until: number = 5;
  isConsistent: boolean = true;
  startDate: string = '2020-01-01';
  endDate: string = '2021-02-25';

  pageEvent: PageEvent;
  datasource: null;
  pageIndex: number;
  pageSize: number;
  length: number;

  myControl = new FormControl();
  options: boolean[] = [true, false];

  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  constructor(
    private router: Router,
    private transactionService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe((transaciones) => {
      this.transactions = transaciones;
      console.log(this.transactions);
    });
  }

  changePage(e: PageEvent) {
    console.log(e);
    this.page_number = e.pageIndex;
    this.page_size = e.pageSize;
    this.from = e.pageIndex * e.pageSize;
    this.until = this.from + e.pageSize;
  }
}
