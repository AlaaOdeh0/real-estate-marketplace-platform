import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDisplayComponent } from './review-display';

describe('ReviewDisplay', () => {
  let component: ReviewDisplayComponent;
  let fixture: ComponentFixture<ReviewDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
