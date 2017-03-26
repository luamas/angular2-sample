import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyup4Component } from './keyup4.component';

describe('Keyup4Component', () => {
  let component: Keyup4Component;
  let fixture: ComponentFixture<Keyup4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Keyup4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Keyup4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
