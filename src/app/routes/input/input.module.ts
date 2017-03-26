import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClickMeComponent} from './click-me/click-me.component';
import {KeyupComponent} from './keyup/keyup.component';
import {LoopBackComponent} from './loop-back/loop-back.component';
import {Keyup2Component} from './keyup2/keyup2.component';
import {Keyup3Component} from './keyup3/keyup3.component';
import {Keyup4Component} from './keyup4/keyup4.component';
import {MySkillComponent} from './my-skill/my-skill.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ClickMeComponent,
    KeyupComponent,
    LoopBackComponent,
    Keyup2Component,
    Keyup3Component,
    Keyup4Component,
    MySkillComponent
  ]
})
export class InputModule { }
