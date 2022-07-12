import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';



@NgModule({
  declarations: [
    fromComponents.HomeComponent, 
    fromComponents.TimeSheetComponent, 
    fromComponents.LoanLedgerComponent, 
    fromComponents.LeaveLedgerComponent, 
    fromComponents.PayslipsComponent,
    fromComponents.ContentHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    fromComponents.HomeComponent, 
    fromComponents.TimeSheetComponent, 
    fromComponents.LoanLedgerComponent, 
    fromComponents.LeaveLedgerComponent, 
    fromComponents.PayslipsComponent,
    fromComponents.ContentHeaderComponent
  ],
})
export class SharedModule { }
