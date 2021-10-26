import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../models/transaction';
import { TransactionsService } from 'src/app/services/transactionsService.service';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css'],
})
export class ViewTransactionsComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  transactions: Transaction[];
  displayedColumns: string[] = [
    'id',
    'processDate',
    'ruleName',
    'process',
    'lineNumber',
    'isConsistent',
    'idTx',
    'fechaPago',
    'idCredito',
    'fechaTransaccion',
    'nombreCanal',
    'idDocumento',
    'tipoDocumento',
    'valor',
    'fechaVencimiento',
    'descripcion',
    'producto',
    'referenciaPago',
    'secuencia',
    'canal',
    'documento',
    'transaccion',
    'causal',
    'subcausal',
    'autorizacion',
  ];

  page_size: number = 10;
  page_number: number = 1;
  page_size_options = [10, 50, 100, 500, 1000];
  isConsistent: boolean = true;
  startDate: string = '2020-01-01';
  endDate: string = '2021-02-25';

  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  constructor(
    private router: Router,
    private transactionService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  /* getTransactions(): void {
    this.transactionService
      .getTransactions()
      .subscribe((res: Transaction[]) => {
        console.log(res);
        this.transactions = res;
      });
  } */

  getTransactions(): void {
    this.transactions = [];
    this.transactionService
      .getTransactionsPageable(
        this.page_number,
        this.page_size,
        this.isConsistent,
        this.startDate,
        this.endDate
      )
      .subscribe(
        (results) => {
          this.transactions = results;
          console.log(this.transactions);
          this.dataSource = new MatTableDataSource(this.transactions);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
