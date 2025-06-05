import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import this for ngModel

@Component({
  selector: 'app-inquiry-modal',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Include FormsModule
  templateUrl: './inquiry-modal.component.html',
  styleUrls: ['./inquiry-modal.component.css']
})
export class InquiryModalComponent {
  name = '';
  email = '';
  message = '';

  @Output() close = new EventEmitter<void>();

  submitInquiry() {
    alert(`Inquiry sent!\nName: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`);
    this.close.emit();
  }

  closeModal() {
    this.close.emit();
  }
}
