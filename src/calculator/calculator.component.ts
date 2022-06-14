import { Options } from 'ng5-slider';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { form } from '../contact/contact.component';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export default class Calculator implements OnInit {
  listData: any;

  public DownPayment: number = 54000;
  public time: number = 3;
  public ROI: number = 11.5;
  public LoanAmount: any = [];
  public EstimatedAmount: any = [];
  public PurchasePrice: number = 164000;

  calculator = new FormGroup({
    PurchasePrice: new FormControl('', Validators.required),
    DownPayment: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    ROI: new FormControl('', Validators.required),
    LoanAmount: new FormControl('', Validators.required),
    EstimatedAmount: new FormControl('', Validators.required),
  });
  loanAmount() {
    this.LoanAmount = this.PurchasePrice - this.DownPayment;
  }
  //  M = P[r(1+r)^n/((1+r)^n)-1)]

  estimate() {
    this.EstimatedAmount =
      this.LoanAmount *
      (((this.ROI / 12 / 100) *
        Math.pow(1 + this.ROI / 12 / 100, this.time * 12)) /
        (Math.pow(1 + this.ROI / 12 / 100, this.time * 12) - 1));
  }
  constructor() {
    this.listData = [];
  }
  public addquote(): void {
    this.listData.push(this.calculator.value);

    this.calculator.reset();
  }
  reset() {
    this.calculator.reset();
  }

  ngOnInit() {}
}
