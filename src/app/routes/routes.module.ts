import { NgModule } from '@angular/core';
import {routes} from './routes';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutesModule { }
