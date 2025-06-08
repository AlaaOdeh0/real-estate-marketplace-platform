import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDisplay } from './review-display';

describe('ReviewDisplay', () => {
  let component: ReviewDisplay;
  let fixture: ComponentFixture<ReviewDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
