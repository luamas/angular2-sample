import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent {
  clickMessage;
  onClickMe() {
    this.clickMessage = '我被点击了!!';
  }
}
