import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {AddUserComponent} from '../add-user/add-user.component';
import {AddPropertyComponent} from '../add-property/add-property.component';
import {Property} from '../models/property.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PropertyService} from '../services/property.services';
import {ListingsService} from '../listings.service';

@Component({
  selector: 'app-realestate-page',
  imports: [
    FormsModule,
    NgForOf,



  ],
  templateUrl: './realestate-page.component.html',
  standalone: true,
  styleUrl: './realestate-page.component.css'
})
export class RealestatePageComponent implements OnInit {




  searchText: string = "";
  selectedType: string = 'all';



  loadProperties(): void {
    this.propertyService.getFilteredProperties(this.selectedType).subscribe(data => {
      this.properties = data;
    });
  }




  search(): void {
    this.propertyService.searchProperties(this.searchText).subscribe(data => {
      this.properties = data;
    });
  }








  properties: Property[] = [];

  constructor(
    private propertyService: PropertyService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe((data: Property[]) => {
      this.properties = data;
    });
  }

  navigateToEdit(propertyId: string): void {
    this.router.navigate(['/edit-listing', propertyId]);
  }

  confirmDelete(propertyId: string): void {
    const confirmed = confirm('Are you sure you want to delete this property?');
    if (confirmed) {
      this.propertyService.deleteProperty(propertyId).subscribe(() => {
        alert('Property deleted!');

        this.properties = this.properties.filter(p => p.id !== propertyId);
      });
    }
  }

  addProperty(): void {
    this.router.navigate(['/add']);
  }
}


