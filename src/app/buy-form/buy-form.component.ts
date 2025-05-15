import { Component, EventEmitter, Output ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buy-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-section">
      <h3>Buy Inquiry</h3>
      <input [(ngModel)]="name" placeholder="Your Name" />
      <input [(ngModel)]="email" placeholder="Email" />
      <textarea [(ngModel)]="message" placeholder="Message"></textarea>
      <button (click)="submitBuy()">Submit Buy Inquiry</button>
    </div>
  `,
  styles: [`
    .form-section { margin-top: 20px; display: flex; flex-direction: column; gap: 0.5rem; }
    input, textarea { width: 100%; padding: 0.5rem; }
    button { width: fit-content; padding: 0.5rem 1rem; background-color:rgb(110, 149, 119); color: white; border: none; border-radius: 4px; }
    button:hover:not(:disabled) {background-color:rgb(45, 52, 43);}
  `]
})
export class BuyFormComponent {
  name = '';
  email = '';
  message = '';
  
  @Input() listing: any;
  @Output() submitted = new EventEmitter<void>();

  submitBuy() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill out all fields');
      return;
    }
    alert(`Buy inquiry sent by ${this.name}`);
    this.submitted.emit();
  }
}
