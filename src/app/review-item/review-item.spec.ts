import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewItemComponent } from './review-item';

describe('ReviewItem', () => {
  let component: ReviewItemComponent;
  let fixture: ComponentFixture<ReviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
