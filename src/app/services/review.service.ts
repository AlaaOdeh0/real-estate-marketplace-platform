import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs'; // Import Subject and tap
import { Review } from '../interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://127.0.0.1:8001/api/reviews';
  private token = '...'; // Your token here
  private headers = new HttpHeaders({ /* ... */ });
  
  // 1. أضف هذا السطر
  private reviewAddedSource = new Subject<void>();

  // 2. وأضف هذا السطر
  reviewAdded$ = this.reviewAddedSource.asObservable();

  constructor(private http: HttpClient) {}

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl, { headers: this.headers });
  }

  // عدّل هذه الدالة
  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.apiUrl, review, { headers: this.headers }).pipe(
      tap(() => {
        // 3. وعند نجاح الإضافة، أبلغ كل من يستمع
        this.reviewAddedSource.next();
      })
    );
  }
}