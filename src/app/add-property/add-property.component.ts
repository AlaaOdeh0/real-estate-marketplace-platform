
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyService } from '../services/property.services';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  propertyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private router: Router
  ) {
    this.propertyForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      description: [''],
      address: [''],
      status: ['active', Validators.required],
      area: [0],
      bedrooms: [0],
      bathrooms: [0],
      mlsId: [''],
      agency: [''],
      agent: [''],
      features: [''],
      images: ['']
    });
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      const formValue = this.propertyForm.value;
      const newProperty = {
        ...formValue,
        features: formValue.features.split(',').map((f: string) => f.trim()),
        images: formValue.images.split(',').map((img: string) => img.trim()),
        priceCut: { amount: 0, date: '' }
      };
      this.propertyService.addProperty(newProperty).subscribe(() => {
        alert('Property added!');
        this.router.navigate(['/']);
      });
    } else {
      alert('Please fill out the required fields.');
    }
  }

}
