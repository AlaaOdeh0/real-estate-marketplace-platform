import { Component, OnInit } from '@angular/core';
import { Review } from '../interfaces/review';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';
import { ReviewItemComponent } from '../review-item/review-item';
import { LeaveReviewFormComponent } from '../leave-review-form/leave-review-form';

interface RatingBreakdown {
    excellent: number;
    good: number;
    average: number;
    poor: number;
}

@Component({
  selector: 'app-review-display',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    DecimalPipe,
    ReviewItemComponent,
    LeaveReviewFormComponent
  ],
  templateUrl: './review-display.html',
  styleUrls: ['./review-display.css']
})
export class ReviewDisplayComponent implements OnInit {
  overallRating: number = 3.9;
  totalReviews: number = 20;
  ratingBreakdown: RatingBreakdown = {
      excellent: 8,
      good: 6,
      average: 3,
      poor: 3
  };
  reviews: Review[] = [];
  showReviewForm: boolean = false;
  breakdownPercentages = {
      excellent: 0,
      good: 0,
      average: 0,
      poor: 0
  };
  maxRating: number = 5;
  stars: number[] = [];

  constructor() {
    this.stars = Array(this.maxRating).fill(0).map((x, i) => i + 1);
  }

  ngOnInit(): void {
    this.calculateBreakdownPercentages();
    this.loadMockReviews();
  }

  calculateBreakdownPercentages(): void {
      if (this.totalReviews > 0) {
          this.breakdownPercentages.excellent = (this.ratingBreakdown.excellent / this.totalReviews) * 100;
          this.breakdownPercentages.good = (this.ratingBreakdown.good / this.totalReviews) * 100;
          this.breakdownPercentages.average = (this.ratingBreakdown.average / this.totalReviews) * 100;
          this.breakdownPercentages.poor = (this.ratingBreakdown.poor / this.totalReviews) * 100;
      } else {
          this.breakdownPercentages = { excellent: 0, good: 0, average: 0, poor: 0 };
      }
  }

  loadMockReviews(): void {
      this.reviews = [
        { id: 1, reviewerName: 'Martin Luather', rating: 4, comment: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), reviewerAvatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { id: 2, reviewerName: 'Johan Smith Jeo', rating: 3, comment: 'Okay experience, could be better in communication. The process was average.', date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), reviewerAvatarUrl: 'https://randomuser.me/api/portraits/men/33.jpg' },
        { id: 3, reviewerName: 'Sarah Connors', rating: 5, comment: 'Absolutely fantastic! Very professional and helpful throughout the entire process. Highly recommended!', date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), reviewerAvatarUrl: 'https://randomuser.me/api/portraits/women/34.jpg' },
        { id: 4, reviewerName: 'Mike Vance', rating: 2, comment: 'Not satisfied with the service. There were delays and miscommunications.', date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), reviewerAvatarUrl: 'https://randomuser.me/api/portraits/men/35.jpg' }
      ];
  }

  toggleReviewForm(): void {
      this.showReviewForm = !this.showReviewForm;
  }

  handleReviewSubmitted(newReview: Review): void {
      this.reviews.unshift(newReview);
      this.totalReviews++;
      this.updateBreakdownCount(newReview.rating);
      this.calculateBreakdownPercentages();
      this.overallRating = this.calculateNewOverallRating();
      this.showReviewForm = false;
  }

  updateBreakdownCount(rating: number): void {
      if (rating === 5) this.ratingBreakdown.excellent++;
      else if (rating === 4) this.ratingBreakdown.good++;
      else if (rating === 3) this.ratingBreakdown.average++;
      else this.ratingBreakdown.poor++;
   }

  calculateNewOverallRating(): number {
       const oldTotalSum = (this.overallRating * (this.totalReviews - 1));
       const newTotalSum = oldTotalSum + this.reviews[0].rating;
       const newAvg = newTotalSum / this.totalReviews;
       return parseFloat(newAvg.toFixed(1));
  }
}