import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputModule} from './input/input.module';
import {MyformModule} from './myform/myform.module';

@NgModule({
  imports: [
    CommonModule,
    InputModule,
    MyformModule
  ],
  declarations: []
})
export class RoutesModule { }
