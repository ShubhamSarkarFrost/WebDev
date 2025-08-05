import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoanInputComponent } from './loan-input/loan-input.component';
import { SummaryComponent } from './summary/summary.component';
import { AmortizationComponent } from './amortization/amortization.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanInputComponent,
    SummaryComponent,
    AmortizationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
