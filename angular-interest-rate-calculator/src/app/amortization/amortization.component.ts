import { Component } from '@angular/core';

@Component({
  selector: 'app-amortization',
  templateUrl: './amortization.component.html',
  styleUrls: ['./amortization.component.css']
})
export class AmortizationComponent {
  // This component would typically receive loan details and generate
  // an amortization schedule. For this example, it's a placeholder.
  isExpanded: boolean = false;

  /**
   * Toggles the visibility of the amortization details.
   */
  toggleAmortization(): void {
    this.isExpanded = !this.isExpanded;
    // In a real application, you would load or render the amortization table here
    // based on the isExpanded state.
  }
}
