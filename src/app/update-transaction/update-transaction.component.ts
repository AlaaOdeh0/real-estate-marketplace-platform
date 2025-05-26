import {Component, EventEmitter, input, Input, output, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

declare var bootstrap: any;
@Component({
  selector: 'app-update-transaction',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-transaction.component.html',
  styleUrl: './update-transaction.component.css'
})
export class UpdateTransactionComponent {
  @Input() transaction: any;
  @Output() transactionupdated = new EventEmitter<any>();

  editForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      transactionId: ['', Validators.required],
      propertyId: [null, Validators.required],
      propertyTitle: ['', Validators.required],
      transactionType: ['', Validators.required],
      amount: [null, Validators.required],
      currency: ['', Validators.required],
      date: ['', Validators.required],
      buyer_id: ['', Validators.required],
      buyer_name: ['', Validators.required],
      customer_id: ['', Validators.required],
      customer_name: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      status: ['', Validators.required],
      documents: [null]
    });
  }

  ngOnChanges() {
    if (this.transaction) {
      this.editForm.patchValue(this.transaction);
    }
  }
  submitForm() {
    if (this.editForm.valid) {
      this.transactionupdated.emit(this.editForm.value);
      const modal = bootstrap.Modal.getInstance(document.getElementById('editTransactionModal'));
      modal.hide();
      this.editForm.reset();
    }
  }

}
