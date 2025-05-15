import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  editForm: FormGroup;
  listingId!: number;
  imagePreview: string | ArrayBuffer | null = null;
  imageFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: ListingsService
  ) {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      image: [null]
    });
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.listingId = +idParam;
      const listing = this.service.getListingById(this.listingId);
      if (listing) {
        this.editForm.patchValue(listing);
        if (listing.image) {
          this.imagePreview = listing.image;
        }
      }
    }
  }

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.imageFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.editForm.patchValue({ image: reader.result }); // save base64 or URL
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      const updatedData = this.editForm.value;
      this.service.updateListing(this.listingId, updatedData);
      this.router.navigate(['/']);
    }
  }
}
