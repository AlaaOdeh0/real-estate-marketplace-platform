import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveReviewForm } from './leave-review-form';

describe('LeaveReviewForm', () => {
  let component: LeaveReviewForm;
  let fixture: ComponentFixture<LeaveReviewForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveReviewForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveReviewForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
