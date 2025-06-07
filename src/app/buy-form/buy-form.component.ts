import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buy-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent {
  @Input() propertyId!: string;
  @Output() formClosed = new EventEmitter<void>();

  name = '';
  email = '';
  phone = '';
  paymentMethod = '';

  submitForm() {
    if (!this.name || !this.email || !this.phone || !this.paymentMethod) {
      alert('Please fill all fields.');
      return;
    }

    console.log('Buy request submitted:', {
      propertyId: this.propertyId,
      name: this.name,
      email: this.email,
      phone: this.phone,
      paymentMethod: this.paymentMethod
    });

    alert('Your buy request has been sent to the agent!');
    this.formClosed.emit(); 
  }

  closeForm() {
    this.formClosed.emit();
  }
}
