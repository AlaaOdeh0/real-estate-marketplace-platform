import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inquiry-modal',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './inquiry-modal.component.html',
  styleUrls: ['./inquiry-modal.component.css']
})
export class InquiryModalComponent {
  @Input() listing: any;
  @Output() close = new EventEmitter<void>();

  name = '';
  message = '';

  sendInquiry() {
    if (!this.name || !this.message) {
      alert('Please fill out all fields');
      return;
    }

    console.log('Inquiry submitted for', this.listing);
    alert(`Inquiry sent for ${this.listing?.title} by ${this.name}`);
    this.close.emit();
  }
}
