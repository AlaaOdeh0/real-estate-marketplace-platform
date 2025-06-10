import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://127.0.0.1:8001/api';

  private headers = new HttpHeaders({
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTc0OTM4MjYxOCwiZXhwIjoxNzQ5Mzg2MjE4LCJuYmYiOjE3NDkzODI2MTgsImp0aSI6InRVZjhPZVlLRnpYUnphOW8iLCJzdWIiOjUsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.wqqxuZEd58eha2tucoqfWEx1I2fvBkV2yMw6GUX00ns',
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  getAllNotifications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/notifications`, { headers: this.headers });
  }

  createNotification(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/notifications`, data, { headers: this.headers });
  }

  markAsRead(notificationId: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/notifications/${notificationId}/read`, {}, { headers: this.headers });
  }
}