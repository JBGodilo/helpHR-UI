import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from '@shared/components';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: fromComponents.AboutComponent },
  { path: 'timesheet', component: fromComponents.TimeSheetComponent },
  { path: 'loan-ledger', component: fromComponents.LoanLedgerComponent },
  { path: 'leave-ledger', component: fromComponents.LeaveLedgerComponent },
  { path: 'payslip', component: fromComponents.PayslipsComponent },
]

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
