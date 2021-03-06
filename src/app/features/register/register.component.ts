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
    // console.log(this.credentials.at(0).get('customerPhone').errors);
  }
  async Onsubmit() {
      this.form.markAllAsTouched();
      if(this.form.invalid){
        return;
      }else{
        const myJson = {
          "customerEmail" : this.form.get('customerEmail').value,
          "password": this.form.get('password').value,
          "customerFullName": this.form.get('customerFullName').value,
          "customerBirthDay": this.form_birtday.get('customerBirthDay').value,
          "customerGender": this.form.get('customerGender').value,
          "customerPhone": this.credentials.at(0).get('customerPhone').value,
          "customerTaxId": this.form.get('customerTaxId').value,
        };
          console.log(myJson);
          const res  = await this.http.InsertRegister(myJson);
          console.log(res);
      }
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
