import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveReviewFormComponent } from '../leave-review-form/leave-review-form';
import { ReviewItemComponent } from '../review-item/review-item';
import { ReviewDisplayComponent } from '../review-display/review-display';

@Component({
  selector: 'app-feedback-page',
  standalone: true,
  imports: [
    CommonModule,
    LeaveReviewFormComponent,
    ReviewItemComponent,
    ReviewDisplayComponent
  ],
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent {}