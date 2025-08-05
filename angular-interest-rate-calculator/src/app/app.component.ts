import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interest Rate Calculator';

  // Initial values for the calculator
  loanAmount: number = 1000000; // Rs. 1,000,000
  interestRate: number = 6.5; // 6.5% per annum
  loanTenure: number = 5; // 5 years

  // Calculated values
  monthlyEMI: number = 0;
  principalAmountCalculated: number = 0; // This will be the same as loanAmount for display
  totalInterest: number = 0;
  totalAmount: number = 0;

  constructor() {
    this.calculateEMI(); // Calculate initial EMI on component load
  }

  /**
   * Handles changes from the loan input component.
   * Recalculates EMI whenever input values change.
   * @param event Object containing updated loanAmount, interestRate, and loanTenure.
   */
  onLoanInputChange(event: { loanAmount: number, interestRate: number, loanTenure: number }) {
    this.loanAmount = event.loanAmount;
    this.interestRate = event.interestRate;
    this.loanTenure = event.loanTenure;
    this.calculateEMI();
  }

  /**
   * Calculates the Equated Monthly Installment (EMI) and other summary figures.
   * Formula for EMI: E = P * r * (1 + r)^n / ((1 + r)^n – 1)
   * Where:
   * P = Principal Loan Amount
   * r = Monthly Interest Rate (annual rate / 12 / 100)
   * n = Number of Monthly Installments (loan tenure in years * 12)
   */
  calculateEMI(): void {
    const P = this.loanAmount;
    const r = (this.interestRate / 12) / 100; // Monthly interest rate
    const n = this.loanTenure * 12; // Total number of monthly installments

    if (r === 0) { // Handle zero interest rate case
      this.monthlyEMI = P / n;
      this.totalInterest = 0;
      this.totalAmount = P;
    } else {
      const emiNumerator = P * r * Math.pow((1 + r), n);
      const emiDenominator = Math.pow((1 + r), n) - 1;
      this.monthlyEMI = emiNumerator / emiDenominator;

      this.totalAmount = this.monthlyEMI * n;
      this.totalInterest = this.totalAmount - P;
    }

    this.principalAmountCalculated = P; // Set for display in summary
  }
}
