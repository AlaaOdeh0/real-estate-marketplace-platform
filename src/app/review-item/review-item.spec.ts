import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewItem } from './review-item';

describe('ReviewItem', () => {
  let component: ReviewItem;
  let fixture: ComponentFixture<ReviewItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
