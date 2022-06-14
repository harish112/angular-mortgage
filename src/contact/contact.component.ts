import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  // userForm: FormGroup;
  // constructor(private form: FormBuilder) {
  //   this.userForm = this.form.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //   });
  // }
  // public username: string;
  // public email: string;
  public listData = [];
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  constructor() {
    this.listData = [];
  }
  public addquote(): void {
    this.listData.push(this.form.value);
    this.form.reset();
  }

  ngOnInit() {}
}
