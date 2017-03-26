import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './routes/input/click-me/click-me.component';
import { KeyupComponent } from './routes/input/keyup/keyup.component';
import { LoopBackComponent } from './routes/input/loop-back/loop-back.component';
import { Keyup2Component } from './routes/input/keyup2/keyup2.component';
import { Keyup3Component } from './routes/input/keyup3/keyup3.component';
import { Keyup4Component } from './routes/input/keyup4/keyup4.component';
import { MySkillComponent } from './routes/input/my-skill/my-skill.component';
import { MyForm1Component } from './routes/myform/my-form1/my-form1.component';
import {RoutesModule} from "./routes/routes.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent, ClickMeComponent, KeyupComponent, LoopBackComponent, Keyup2Component, Keyup3Component, Keyup4Component,
    MySkillComponent, MyForm1Component]
})
export class AppModule { }
