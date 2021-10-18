import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { TransactionsService } from './services/transactionsService.service';

@NgModule({
  declarations: [AppComponent, ViewTransactionsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TransactionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
