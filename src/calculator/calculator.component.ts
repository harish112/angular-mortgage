import { Options } from 'ng5-slider';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export default class Calculator implements OnInit {
  // highValue: number = 60;
  // options: Options = {
  //   floor: 0,
  //   ceil: 100,
  // };

  // PurchasePrice: number = 0;
  // DownPayment: number = 0;
  // ROI: number = 0;
  // Time: number = 0;
  // Principal =
  //   this.PurchasePrice - this.DownPayment > 0
  //     ? this.DownPayment - this.PurchasePrice
  //     : 0;
  // // LoanAmount = (this.Principal * this.ROI * this.Time) / 100;
  // LoanAmount = this.PurchasePrice - this.DownPayment;
  // EstimatedAmount = this.LoanAmount / 12;

  // SetLoanAmount() {
  //   this.PurchasePrice - this.DownPayment;
  // }

  // form = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.required),
  // });
  // public PurchasePrice: number;
  public DownPayment: number = 54000;
  public time: number = 3;
  public ROI: number = 11.5;
  public LoanAmount: number;
  public EstimatedAmount: number;

  PurchasePrice: number = 164000;
  options: Options = {
    floor: 0,
    ceil: 250000,
    step: 500,
  };

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
  ngOnInit() {}
}
