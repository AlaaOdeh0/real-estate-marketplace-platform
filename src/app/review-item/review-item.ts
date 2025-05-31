import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../interfaces/review';
import { NgFor, DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-review-item',
  standalone: true,
  imports: [
    NgFor,
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './review-item.html',
  styleUrls: ['./review-item.css']
})
export class ReviewItemComponent implements OnInit {
  @Input() review!: Review;
  maxRating: number = 5;
  stars: number[] = [];

  constructor() {
    this.stars = Array(this.maxRating).fill(0).map((x, i) => i + 1);
  }

  ngOnInit(): void { }

  getTimeAgo(dateInput: Date | string): string {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
     interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
  }
}