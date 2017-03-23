import { Component } from '@angular/core';

@Component({
  selector: 'app-keyup4',
  templateUrl: './keyup4.component.html',
  styleUrls: ['./keyup4.component.css']
})
export class Keyup4Component {
  value = '';
  update(value: string) { this.value = value; }
}
