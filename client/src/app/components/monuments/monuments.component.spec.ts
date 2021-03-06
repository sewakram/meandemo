import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentsComponent } from './monuments.component';

describe('MonumentsComponent', () => {
  let component: MonumentsComponent;
  let fixture: ComponentFixture<MonumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
