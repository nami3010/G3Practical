import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionViewComponent } from './transaction-list/transaction-view/transaction-view.component';

const routes: Routes = [
  { path: 'transaction-list', component: TransactionListComponent },
  { path: 'transaction-view', component: TransactionViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
