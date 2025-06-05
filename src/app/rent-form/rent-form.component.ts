import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rent-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent {
  @Input() propertyId!: string;
  @Output() formClosed = new EventEmitter<void>();

  name = '';
  email = '';
  phone = '';
  rentalPeriod = '';

  submitForm() {
    if (!this.name || !this.email || !this.phone || !this.rentalPeriod) {
      alert('Please fill all fields.');
      return;
    }

    console.log('Rent request submitted:', {
      propertyId: this.propertyId,
      name: this.name,
      email: this.email,
      phone: this.phone,
      rentalPeriod: this.rentalPeriod
    });

    alert('Your rent inquiry has been sent!');
    this.formClosed.emit(); // Close the modal
  }

  closeForm() {
    this.formClosed.emit();
  }
}
