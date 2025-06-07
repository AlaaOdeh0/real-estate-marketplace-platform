import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-transaction',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-transaction.component.html',
  standalone: true,
  styleUrl: './add-transaction.component.css'
})
export class AddTransactionComponent {



  @Output() transactionAdded = new EventEmitter<any>();

  addtransactionForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.addtransactionForm = this.fb.group({
      transactionId: ['',Validators.required],
      propertyId: ['',Validators.required],
      propertyTitle: ['',Validators.required],
      transactionType: ['',Validators.required],
      amount: ['',Validators.required],
      currency: [''],
      date: [''],
      buyer_name: ['',Validators.required],
      buyer_id: ['',Validators.required],
      customer_name: ['',Validators.required],
      customer_id: ['',Validators.required],
      paymentMethod: [''],
      status: ['',Validators.required],
      documents: ['']
    });


  }


  onSubmit() {
    if (this.addtransactionForm.valid) {
      const newUserData = {
        ...this.addtransactionForm.value,


      };



      this.transactionAdded.emit(newUserData);
      this.addtransactionForm.reset();

    }
  }


}
