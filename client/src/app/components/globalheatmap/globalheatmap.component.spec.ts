import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalheatmapComponent } from './globalheatmap.component';

describe('GlobalheatmapComponent', () => {
  let component: GlobalheatmapComponent;
  let fixture: ComponentFixture<GlobalheatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalheatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalheatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
