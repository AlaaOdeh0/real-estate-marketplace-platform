import { Component } from '@angular/core';
import { ReviewDisplayComponent} from './review-display/review-display';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReviewDisplayComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'review-rating-app';
}