import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Review } from '../interfaces/review';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-leave-review-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    NgIf
  ],
  templateUrl: './leave-review-form.html',
  styleUrls: ['./leave-review-form.css']
})
export class LeaveReviewFormComponent implements OnInit {
  reviewForm: FormGroup;
  selectedRating: number = 0;
  hoveredRating: number = 0;
  maxRating: number = 5;
  stars: number[] = [];

  @Output() reviewSubmitted = new EventEmitter<Review>();

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', Validators.required]
    });
    this.stars = Array(this.maxRating).fill(0).map((x, i) => i + 1);
  }

  ngOnInit(): void {}

  setRating(rating: number): void {
    this.selectedRating = rating;
    this.reviewForm.get('rating')?.setValue(rating);
    this.reviewForm.get('rating')?.markAsTouched();
  }

  setHoverRating(rating: number): void {
    this.hoveredRating = rating;
  }

  clearHoverRating(): void {
    this.hoveredRating = 0;
  }

  onSubmit(): void {
    if (this.reviewForm.valid) {
      const newReview: Review = {
        id: Date.now(),
        reviewerName: 'Current User',
        rating: this.reviewForm.value.rating,
        comment: this.reviewForm.value.comment,
        date: new Date(),
      };
      this.reviewSubmitted.emit(newReview);
      this.reviewForm.reset();
      this.selectedRating = 0;
    } else {
      this.reviewForm.markAllAsTouched();
    }
  }
}