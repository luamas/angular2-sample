import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  changeTheme(color: string): void {
    const link: any  = $('<link>');
    // link
    //   .appendTo('head')
    //   .attr({type : 'text/css', rel : 'stylesheet'})
    //   .attr('href', 'themes/app-' + color + '.css');
  }

  rtl(): void {
    const body: any = $('body');
    body.toggleClass('rtl');
  }

  sidebarToggler(): void  {
    const sidebar: any = $('#sidebar');
    const mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
  }
  constructor() { }

  ngOnInit() {
  }

}
