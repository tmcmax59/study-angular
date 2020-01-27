import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RegisterRoutingModule
    ]
})
export class RegisterModule { }
