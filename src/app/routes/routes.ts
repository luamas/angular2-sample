import { LayoutComponent } from '../layout/layout.component';

export const routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: 'app/routes/home/home.module#HomeModule' },
      { path: 'input', loadChildren: 'app/routes/input/input.module#InputModule' },
      { path: 'myform', loadChildren: 'app/routes/myform/myform.module#MyformModule' }
    ]
  },

  // Not found
  { path: '**', redirectTo: 'home' }

];
