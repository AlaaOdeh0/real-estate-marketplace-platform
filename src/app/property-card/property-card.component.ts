
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingsService } from '../listings.service';
import { InquiryModalComponent } from '../inquiry-modal/inquiry-modal.component';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, RouterModule, InquiryModalComponent],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
  @Input() listing: any;
  showInquiryModal = false;

  constructor(private service: ListingsService) {}

  toggleStatus() {
    const next: { [key: string]: string } = {
      active: 'sold',
      sold: 'rent',
      rent: 'active'
    };
    this.listing.status = next[this.listing.status] || 'active';
  }

  deleteListing() {
    if (confirm('Are you sure you want to delete this listing?')) {
      this.service.deleteListing(this.listing.id);
    }
  }

  openInquiryModal() {
    this.showInquiryModal = true;
  }

  closeInquiryModal() {
    this.showInquiryModal = false;
  }
}
