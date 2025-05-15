import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inquiry } from './models/inquiry.model';
import { Observable, of } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class InquiryService {
private mockInquiries: Inquiry[] = [];
private nextId = 1;

constructor(private http: HttpClient) {}

submitInquiry(inquiry: Omit<Inquiry, 'id' | 'date'>): Observable<Inquiry> {
const newInquiry: Inquiry = {
...inquiry,
id: this.nextId++,
date: new Date().toISOString()
};
this.mockInquiries.push(newInquiry);
return of(newInquiry); 
}

getInquiries(): Observable<Inquiry[]> {
return of(this.mockInquiries); 
}
}