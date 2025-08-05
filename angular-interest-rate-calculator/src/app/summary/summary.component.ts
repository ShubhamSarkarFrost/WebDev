import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnChanges {
  @Input() monthlyEMI: number = 0;
  @Input() principalAmount: number = 0;
  @Input() totalInterest: number = 0;
  @Input() totalAmount: number = 0;

  // Donut chart data for visualization
  principalPercentage: number = 0;
  interestPercentage: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    // Recalculate percentages whenever input values change
    if (changes['principalAmount'] || changes['totalInterest']) {
      this.updateChartData();
    }
  }

  /**
   * Updates the percentages for the donut chart based on principal and total interest.
   */
  updateChartData(): void {
    if (this.totalAmount > 0) {
      this.principalPercentage = (this.principalAmount / this.totalAmount) * 100;
      this.interestPercentage = (this.totalInterest / this.totalAmount) * 100;
    } else {
      this.principalPercentage = 0;
      this.interestPercentage = 0;
    }
  }

  /**
   * Formats a number as Indian Rupees (₹) with commas.
   * @param value The number to format.
   * @returns Formatted string.
   */
  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }
}

