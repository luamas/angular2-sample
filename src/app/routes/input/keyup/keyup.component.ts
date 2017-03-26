import { Component } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent {
  values = '';

  // 这个方法不安全,因为没有给出事件类型,而且不是所有的事件都会有event.target.value,所以会采用下面方法
  // onKey(event: any) { // 松散类型
  //   // event.target.value获取值
  //   // event.key 这个返回的是建名,例如:d | s | f | s | d | Shift | CapsLock | Enter | | Enter | Shift | ArrowLeft | ArrowRight | ArrowUp |
  //   this.values += event.target.value + ' | ';
  // }

  //
  onKey(event: KeyboardEvent) {
    // 这里这个语法前面学过的类型断言,其实就是将event.target类型转换为HTMLInputElement类型
    this.values += (<HTMLInputElement> event.target).value + ' | ';
  }
}

