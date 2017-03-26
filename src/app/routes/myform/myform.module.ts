import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyForm1Component} from './my-form1/my-form1.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MyForm1Component]
})
export class MyformModule { }
