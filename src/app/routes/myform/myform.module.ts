import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyForm1Component} from './my-form1/my-form1.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: MyForm1Component }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyForm1Component]
})
export class MyformModule { }
