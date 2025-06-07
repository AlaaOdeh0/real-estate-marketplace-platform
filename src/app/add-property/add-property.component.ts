import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-property',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-property.component.html',
  standalone: true,
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent {

  onImageSelected($event: Event) {
    throw new Error('Method not implemented.');
  }



  @Output() propertyAdded = new EventEmitter<any>();

  addPropertyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addPropertyForm = this.fb.group({
      id: [null, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      seller_id: [null, Validators.required],
      seller_name: ['', Validators.required],
      location: ['', Validators.required],
      area: [null, Validators.required],
      status: ['', Validators.required],
      images: ['']
    });

  }


  onSubmit() {
    if (this.addPropertyForm.valid) {
      const newUserData = {
        ...this.addPropertyForm.value,


      };



      this.propertyAdded.emit(newUserData);
      this.addPropertyForm.reset();

    }
  }

}
