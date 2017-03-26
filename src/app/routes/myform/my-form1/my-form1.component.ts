import { Component, OnInit } from '@angular/core';
import {MyUser} from '../my-user';

@Component({
  moduleId: module.id,
  selector: 'app-my-form1',
  templateUrl: './my-form1.component.html',
  styleUrls: ['./my-form1.component.css']
})
export class MyForm1Component implements OnInit {
  hobbys = ['滑冰', '跑步', '爬山', '游泳', '唱歌', '跳舞', '听音乐', '读书', '踢足球', '打篮球', '其他'];
  model = new MyUser(3, 'luamas', 28, '无以开口', this.hobbys[this.hobbys.length - 1]);
  submitted = false;

  onSubmit() { this.submitted = true; }
  newUser() {
    this.model = new MyUser(3, '', null, '', '');
  }
  constructor() {
  }
  ngOnInit() {
  }

}
