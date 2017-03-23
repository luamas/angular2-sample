import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyup3Component } from './keyup3.component';

describe('Keyup3Component', () => {
  let component: Keyup3Component;
  let fixture: ComponentFixture<Keyup3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Keyup3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Keyup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
