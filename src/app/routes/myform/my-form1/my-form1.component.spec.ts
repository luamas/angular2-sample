import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyForm1Component } from './my-form1.component';

describe('MyForm1Component', () => {
  let component: MyForm1Component;
  let fixture: ComponentFixture<MyForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
