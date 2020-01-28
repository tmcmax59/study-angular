import { HttpService } from './../../core/service/http-insert.service';
import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../register/model/register.model';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private builder: FormBuilder, private http: HttpService) {
  }
  regisform: RegisterForm;
  form: FormGroup;
  ngOnInit() {
    this.ValidateForm();
    this.addPhone();
    console.log(this.credentials.at(0).get('customerPhone').errors);
  }
  async Onsubmit() {
    // console.log(this.credentials.at(0).get('customerPhone').errors);
    // this.form.get('password').markAsTouched();
    // this.form.get('customerFullName').markAsTouched();
    // this.form.get('customerBirthDay').markAsTouched();
    // this.form.get('customerPhone').markAsTouched();
    // this.form.get('customerTaxId').markAsTouched();
    // if(!this.form_birtday.markAllAsTouched()){
    //   return;
    // }else{
    //   this.form.markAllAsTouched()
    // }
    // if (this.form_birtday.invalid) {
    //   this.form_birtday.markAllAsTouched();
    //   return;
    // } else if (this.form.invalid) {
      this.form.markAllAsTouched();
    //   return;
    // } else {
    //   const myJson = this.form.value;
    //   console.log(myJson);

    //   await this.http.InsertRegister(myJson);
      // console.log(res);
    // }
  }
  public ValidateForm() {
    this.form = this.builder.group({
      customerEmail: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      customerFullName: [null, Validators.required],
      customerGender: ['m'],
      customerTaxId: [null, Validators.required],
      form_birtday: this.builder.group({
        customerBirthDay: [null, Validators.required],
        // customerPhone:[null, [Validators.required, Validators.minLength(10), Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]],
      }),
      credentials: this.builder.array([
      ]),
    });
    
  }
  addPhone() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.builder.group({
      customerPhone: ['', [Validators.required, Validators.minLength(10)]],
    }));
  }
  Remove(i) {
    const creds = this.form.controls.credentials as FormArray;
    creds.removeAt(i);
    console.log(i);
  }
  get form_birtday(): any { return this.form.get('form_birtday') as FormGroup; }
  get Email(): any { return this.form.get('customerEmail'); }
  get credentials() { return this.form.get('credentials') as FormArray; }
}
