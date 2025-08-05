import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-loan-input',
  templateUrl: './loan-input.component.html',
  styleUrl: './loan-input.component.css'
})
export class LoanInputComponent {
  @Input() loanAmount: number = 1000000;
  @Input() interestRate: number = 6.5;
  @Input() loanTenure: number = 5;

  @Output() loanInputChange = new EventEmitter<{ loanAmount: number, interestRate: number, loanTenure: number }>();

  minLoanAmount: number = 100000;
  maxLoanAmount: number = 5000000;
  stepLoanAmount: number = 10000;

  minInterestRate: number = 1;
  maxInterestRate: number = 20;
  stepInterestRate: number = 0.1;

  minLoanTenure: number = 1;
  maxLoanTenure: number = 30;
  stepLoanTenure: number = 1;


  onInputChange(): void {
    this.loanInputChange.emit({
      loanAmount: this.loanAmount,
      interestRate: this.interestRate,
      loanTenure: this.loanTenure
    });
  }
}
