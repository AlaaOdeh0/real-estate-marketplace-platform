import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { RouterModule } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  listings: any[] = [];

  constructor(private service: ListingsService) {}

  ngOnInit() {
    this.loadListings();
  }
  
  loadListings() {
    this.listings = this.service.getListings();
  }
}

