import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export default class Calculator {
  PurchasePrice: number = 0;
  DownPayment: number = 0;
  ROI: number = 0;
  Time: number = 0;
  Principal =
    this.PurchasePrice - this.DownPayment > 0
      ? this.DownPayment - this.PurchasePrice
      : 0;
  // LoanAmount = (this.Principal * this.ROI * this.Time) / 100;
  LoanAmount = this.PurchasePrice - this.DownPayment;
  EstimatedAmount = this.LoanAmount / 12;

  SetLoanAmount() {
    this.PurchasePrice - this.DownPayment;
  }
}
