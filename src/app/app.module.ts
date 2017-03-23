import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './input/click-me/click-me.component';
import { KeyupComponent } from './input/keyup/keyup.component';
import { LoopBackComponent } from './input/loop-back/loop-back.component';
import { Keyup2Component } from './input/keyup2/keyup2.component';
import { Keyup3Component } from './input/keyup3/keyup3.component';
import { Keyup4Component } from './input/keyup4/keyup4.component';
import { MySkillComponent } from './input/my-skill/my-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    LoopBackComponent,
    Keyup2Component,
    Keyup3Component,
    Keyup4Component,
    MySkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, ClickMeComponent, KeyupComponent, LoopBackComponent, Keyup2Component, Keyup3Component, Keyup4Component,
    MySkillComponent]
})
export class AppModule { }
