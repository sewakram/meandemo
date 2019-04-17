import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemonomentComponent } from './createmonoment.component';

describe('CreatemonomentComponent', () => {
  let component: CreatemonomentComponent;
  let fixture: ComponentFixture<CreatemonomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemonomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemonomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
