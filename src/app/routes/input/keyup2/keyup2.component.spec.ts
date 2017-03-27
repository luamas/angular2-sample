import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyup2Component } from './keyup2.component';

describe('Keyup2Component', () => {
  let component: Keyup2Component;
  let fixture: ComponentFixture<Keyup2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Keyup2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Keyup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
