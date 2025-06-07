import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {AddTransactionComponent} from '../add-transaction/add-transaction.component';
import {UpdateUserComponent} from '../update-user/update-user.component';
import {UpdateTransactionComponent} from '../update-transaction/update-transaction.component';
declare var bootstrap: any;
@Component({
  selector: 'app-financialtransaction-page',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    AddTransactionComponent,
    UpdateTransactionComponent,
    ReactiveFormsModule

    
  ],
  templateUrl: './financialtransaction-page.component.html',
  styleUrl: './financialtransaction-page.component.css'
})
export class FinancialtransactionPageComponent {
  financialTransactions = [

    {
      transactionId: "TXN-1003",
      propertyId: 3,
      propertyTitle: "Office Space in Downtown Cairo",
      transactionType: "rent",
      amount: 200000,
      currency: "EGP",
      date: "2023-07-10",
      buyer_name: "Karim Enterprises",
      buyer_id: "CUST-1002",
      customer_name: "Alpha Development Group",
      customer_id: "DEV-1002",
      paymentMethod: "credit card",
      status: "completed",
      documents: ["lease_agreement_1003.pdf", "invoice_1003.pdf"]
    },
    {
      transactionId: "TXN-1004",
      propertyId: 4,
      propertyTitle: "Penthouse in Heliopolis",
      transactionType: "purchase",
      amount: 7500000,
      currency: "EGP",
      date: "2023-08-05",
      buyer_name: "Sarah Mahmoud",
      buyer_id: "CUST-1003",
      customer_name: "Sunrise Realty Co.",
      customer_id: "DEV-1003",
      paymentMethod: "bank transfer",
      status: "pending",
      documents: ["contract_1004.pdf"]
    },
    {
      transactionId: "TXN-1005",
      propertyId: 5,
      propertyTitle: "Beach House in Alexandria",
      transactionType: "sale",
      amount: 10000000,
      currency: "EGP",
      date: "2023-09-15",
      buyer_name: "Red Sea Developers",
      buyer_id: "INV-1002",
      customer_name: "Youssef Khaled",
      customer_id: "OWN-1002",
      paymentMethod: "cash",
      status: "completed",
      documents: ["deed_1005.pdf", "receipt_1005.pdf"]
    }


];

  searchText: string = "";
  selectedType: string = 'all';


  applyFilters() {
    return this.financialTransactions.filter(item => {

      if (this.selectedType === 'all' || !this.selectedType) return true;


      return item.transactionType === this.selectedType || item.status === this.selectedType;
    });
  }

  applySearch() {
    const filtered = this.applyFilters();

    if (!this.searchText) return filtered;

    const searchLower = this.searchText.toLowerCase();

    return filtered.filter(transaction => {
      return (
        (transaction.transactionId && transaction.transactionId.toLowerCase().includes(searchLower)) ||
        (transaction.propertyTitle && transaction.propertyTitle.toLowerCase().includes(searchLower)) ||
        (transaction.buyer_name && transaction.buyer_name.toLowerCase().includes(searchLower)) ||
        (transaction.customer_name && transaction.customer_name.toLowerCase().includes(searchLower)) ||
        (transaction.amount && transaction.amount.toString().includes(searchLower)) ||
        (transaction.date && transaction.date.toLowerCase().includes(searchLower)) ||

        (transaction.paymentMethod && transaction.paymentMethod.toLowerCase().includes(searchLower))
      );
    });
  }


  deleteTransaction(id: string) {
    this.financialTransactions = this.financialTransactions.filter(
      t => t.transactionId !== id
    );
  }
  addtransaction(transactionData: any) {


    const newtransaction = {
      ...transactionData,


    };

    this.financialTransactions.push(newtransaction);

  }

  selectedTransaction: any = null;
 editForm:FormGroup;
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



  onTransactionUpdated(updatedtransaction: any) {
    const index = this.financialTransactions.findIndex(
      t => t.transactionId === updatedtransaction.transactionId
    );
    if (index !== -1) {
      this.financialTransactions[index] = updatedtransaction;
    }

    this.selectedTransaction = null;
    this.editForm.reset();
  }
  onSelectTransaction(t: any) {
    this.selectedTransaction = t;
    const { documents, ...rest } = t;
    this.editForm.patchValue(rest);
    this.editForm.get('documents')?.reset();
  }




}
