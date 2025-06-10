import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. استيراد المكونين الذين تريد عرضهما
import { ReviewDisplayComponent } from '../review-display/review-display';
import { ReviewItemComponent } from '../review-item/review-item';

@Component({
  selector: 'app-feedback-page',
  standalone: true,
  imports: [
    CommonModule,
    // 2. إضافتهما هنا لكي يتعرف عليهما الـ HTML
    ReviewDisplayComponent,
    ReviewItemComponent 
  ],
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent {}