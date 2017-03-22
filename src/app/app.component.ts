import { Component } from '@angular/core';
import { Skill } from './skill';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export为导出类(如果想外部引用必须要求可导出,否则外部不可以导入),typescript语法
export class AppComponent {
  title = 'Angular2笔记';
  introduction = '我是一个Angular2新手';
  skills1: Skill[] = [
    {id: 1, name: 'JAVA'},
    {id: 2, name: 'PHP'},
    {id: 3, name: 'Python'},
    {id: 4, name: 'JavaScript'},
    {id: 5, name: 'Others'}];

  // 必须要求有对应的构造方法
  skills2 = [
    new Skill(1, 'JAVA'),
    new Skill(2, 'PHP'),
    new Skill(3, 'Python'),
    new Skill(4, 'JavaScript'),
    new Skill(5, 'Others'),
  ];
}
