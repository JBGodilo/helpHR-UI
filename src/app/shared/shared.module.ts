import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { ProfileModule } from './components/profiles/profile.module';



@NgModule({
  declarations: [
    fromComponents.HomeComponent, 
    fromComponents.TimeSheetComponent, 
    fromComponents.LoanLedgerComponent, 
    fromComponents.LeaveLedgerComponent, 
    fromComponents.PayslipsComponent,
    fromComponents.ContentHeaderComponent,
    fromComponents.AboutComponent,
  ],
  imports: [
    CommonModule,
    ProfileModule
  ],
  exports: [
    fromComponents.HomeComponent, 
    fromComponents.TimeSheetComponent, 
    fromComponents.LoanLedgerComponent, 
    fromComponents.LeaveLedgerComponent, 
    fromComponents.PayslipsComponent,
    fromComponents.ContentHeaderComponent,
    fromComponents.AboutComponent,
  ],
})
export class SharedModule { }
