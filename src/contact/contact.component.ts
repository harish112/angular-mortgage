import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit() {}
}
