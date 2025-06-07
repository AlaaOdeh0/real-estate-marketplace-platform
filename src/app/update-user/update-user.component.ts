import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']

})
export class UpdateUserComponent {
  @Input() user: any;
  @Output() userUpdated = new EventEmitter<any>();

  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profile: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnChanges() {
    if (this.user) {
      this.editForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        profile: this.user.profile,
        type: this.user.type
      });
    }
  }

  submitForm() {
    if (this.editForm.valid) {
      const updatedUser = {
        ...this.user,
        ...this.editForm.value
      };
      this.userUpdated.emit(updatedUser);

    }
  }
}
