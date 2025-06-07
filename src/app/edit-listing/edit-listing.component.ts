import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../services/property.services';
import { Property } from '../models/property.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-listing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  editForm!: FormGroup;
  propertyId: string = '';
  propertyData: Property | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.paramMap.get('id') || '';
    this.propertyService.getPropertyById(this.propertyId).subscribe({
      next: (property) => {
        if (property) {
          this.propertyData = property;
          this.initForm(property); // ✅ important: initialize the form after data is fetched
        } else {
          alert('Property not found.');
          this.router.navigate(['/']);
        }
      },
      error: () => {
        alert('Failed to load property.');
        this.router.navigate(['/']);
      }
    });
  }

  initForm(property: Property): void {
    this.editForm = this.fb.group({
      title: [property.title],
      price: [property.price],
      description: [property.description],
      address: [property.address],
      status: [property.status],
      bedrooms: [property.bedrooms],
      bathrooms: [property.bathrooms],
      area: [property.area],
      images: [property.images?.join(', ') ?? ''],
      features: [property.features?.join(', ') ?? ''],
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const formValues = this.editForm.value;
      const updatedProperty: Partial<Property> = {
        ...formValues,
        images: formValues.images.split(',').map((url: string) => url.trim()),
        features: formValues.features.split(',').map((f: string) => f.trim())
      };
      this.propertyService.updateProperty(this.propertyId, updatedProperty).subscribe(() => {
        alert('Property updated!');
        this.router.navigate(['/']);
      });
    }
  }
}
