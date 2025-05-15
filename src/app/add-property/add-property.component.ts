import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  addForm: FormGroup;
  imagePreview: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private listingsService: ListingsService
  ) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    if (this.addForm.valid) {
      const formValue = this.addForm.value;
      formValue.image = this.imagePreview || null;
      this.listingsService.addListing(formValue);
      this.router.navigate(['/']);
    } else {
      console.log('Form is invalid:', this.addForm.value);
    }
  }
  
}
