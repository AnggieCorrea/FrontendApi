import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { TransactionsService } from './services/transactionsService.service';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ViewTransactionsComponent, PaginatePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [TransactionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
