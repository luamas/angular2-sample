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
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'clickMe', component: ClickMeComponent },
  { path: 'keyup', component: KeyupComponent },
  { path: 'loopBack', component: LoopBackComponent },
  { path: 'keyup2', component: Keyup2Component },
  { path: 'keyup3', component: Keyup3Component },
  { path: 'keyup4', component: Keyup4Component },
  { path: 'mySkill', component: MySkillComponent },
  { path: '', redirectTo: 'clickMe' },

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
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
