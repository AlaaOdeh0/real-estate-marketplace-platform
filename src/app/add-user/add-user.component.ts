import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-add-user',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-user.component.html',
  standalone: true,
  styleUrl: './add-user.component.css'
})

export class AddUserComponent {




  onImageSelected($event: Event) {
    throw new Error('Method not implemented.');
  }



  @Output() userAdded = new EventEmitter<any>();


  adduserForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adduserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profile: ['', Validators.required],
      type: ['', Validators.required],
      images: ['']
    });
  }


  onSubmit() {
    if (this.adduserForm.valid) {
      const newUserData = {
        ...this.adduserForm.value,


      };



      this.userAdded.emit(newUserData);
      this.adduserForm.reset();

    }
  }



}
