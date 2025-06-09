import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../services/property.services';
import { Property } from '../models/property.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  property: Property | null = null;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.propertyService.getPropertyById(id).subscribe({
        next: (prop) => {
          this.property = prop ?? null;
        },
        error: () => {
          this.router.navigate(['/']);
        }
      });
    }
  }

  confirmDelete(): void {
    if (!this.property) return;
    const confirmed = confirm('Are you sure you want to delete this property?');
    if (confirmed) {
      this.propertyService.deleteProperty(this.property.id).subscribe(() => {
        alert('Property deleted!');
        this.router.navigate(['/']);
      });
    }
  }

  navigateToEdit(): void {
    if (this.property) {
      this.router.navigate(['/edit-listing', this.property.id]);
    }
  }

  openInquiry(): void {
    if (this.property) {
      this.router.navigate(['/inquiry', this.property.id]);
    }
  }

  openRent(): void {
    if (this.property) {
      this.router.navigate(['/rent-form', this.property.id]);
    }
  }

  openBuy(): void {
    if (this.property) {
      this.router.navigate(['/buy-form', this.property.id]);
    }
  }

  openFeedback(): void {
    if (this.property) {
      this.router.navigate(['/feedback', this.property.id]);
    }
  }

  currentSlide = 0;

  nextSlide() {
    if (this.property && this.property.images.length > 0) {
      this.currentSlide = (this.currentSlide + 1) % this.property.images.length;
    }
  }

  prevSlide() {
    if (this.property && this.property.images.length > 0) {
      this.currentSlide =
        (this.currentSlide - 1 + this.property.images.length) % this.property.images.length;
    }
  }
}