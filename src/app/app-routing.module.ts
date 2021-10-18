import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/ViewTransactions',
  },
  {
    path: 'ViewTransactions',
    component: ViewTransactionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
