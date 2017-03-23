import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillComponent } from './my-skill.component';

describe('MySkillComponent', () => {
  let component: MySkillComponent;
  let fixture: ComponentFixture<MySkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
