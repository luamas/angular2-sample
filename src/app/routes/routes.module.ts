import { NgModule } from '@angular/core';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutesModule { }
