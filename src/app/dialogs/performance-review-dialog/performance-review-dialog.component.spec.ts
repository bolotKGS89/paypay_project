import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceReviewDialogComponent } from './performance-review-dialog.component';

describe('PerformanceReviewDialogComponent', () => {
  let component: PerformanceReviewDialogComponent;
  let fixture: ComponentFixture<PerformanceReviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceReviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
