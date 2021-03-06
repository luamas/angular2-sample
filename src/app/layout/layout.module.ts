import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {DropdownModule, Ng2BootstrapModule} from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule.forRoot(),
    Ng2BootstrapModule.forRoot()
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent],
  exports: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent]
})
export class LayoutModule { }
