import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PropertyService } from '../services/property.services';
import { Property } from '../models/property.model';
import { PropertyCardComponent } from '../property-card/property-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, PropertyCardComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService, private router: Router) {}

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(data => {
      this.properties = data;
    });
  }

  addProperty() {
    this.router.navigate(['/add']);
  }
  navigateToProperty(id: number | string) {
  this.router.navigate(['/property', id]);
}

}
