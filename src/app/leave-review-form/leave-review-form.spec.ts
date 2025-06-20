import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveReviewFormComponent } from './leave-review-form';

describe('LeaveReviewForm', () => {
  let component: LeaveReviewFormComponent;
  let fixture: ComponentFixture<LeaveReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveReviewFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
