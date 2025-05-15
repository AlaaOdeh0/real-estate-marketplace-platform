import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListingsService } from '../listings.service';
import { BuyFormComponent } from '../buy-form/buy-form.component';
import { RentFormComponent } from '../rent-form/rent-form.component';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, BuyFormComponent, RentFormComponent],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  @Input() listing: any;
  formType: 'rent' | 'buy' | null = null;
  showRentForm() {
    this.formType = 'rent';
  }
 
  showBuyForm() {
    this.formType = 'buy';
  }

  closeForm() {
    this.formType = null;
  }

  constructor(private route: ActivatedRoute, private service: ListingsService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.listing = this.service.getListingById(id);
    }
  }

}
